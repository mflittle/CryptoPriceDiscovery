'use client'

//New Code
import axios, {isCancel, AxiosError} from 'axios';
var responseBody: { data: {
  price_change_7d: string;
  price_change_1m: string;
  name: string; price?: any; logo?: any; 
}; };
var logo: string;
var price: string;
var name: string;
var priceChange7D: string;
var priceChange1M: string;
var coin = 'DOT';
const options = { method: 'GET' };
//End New Code

import { FC, useEffect, useState } from 'react'

import { ContractIds } from '@/deployments/deployments'
import { zodResolver } from '@hookform/resolvers/zod'
import GreeterContract from '@inkathon/contracts/typed-contracts/contracts/greeter'
import {
  contractQuery,
  decodeOutput,
  useInkathon,
  useRegisteredContract,
  useRegisteredTypedContract,
} from '@scio-labs/use-inkathon'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Form, FormControl, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { contractTxWithToast } from '@/utils/contract-tx-with-toast'
import { FileOutput } from 'lucide-react';

const formSchema = z.object({
  newMessage: z.string().min(1).max(90),
})

export const GreeterContractInteractions: FC = () => {
  const { api, activeAccount, activeSigner } = useInkathon()
  const { contract, address: contractAddress } = useRegisteredContract(ContractIds.Greeter)
  const { typedContract } = useRegisteredTypedContract(ContractIds.Greeter, GreeterContract)
  const [greeterMessage, setGreeterMessage] = useState<string>()
  const [fetchIsLoading, setFetchIsLoading] = useState<boolean>()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const { register, reset, handleSubmit } = form

  // Fetch Greeting
  const fetchGreeting = async () => {
    if (!contract || !typedContract || !api) return

    setFetchIsLoading(true)
    try {
      const result = await contractQuery(api, '', contract, 'greet')
      let { output, isError, decodedOutput } = decodeOutput(result, contract, 'greet')
      if (isError) throw new Error(decodedOutput)
      //3/2 Code
      coin = output
      //New Code
      
      const getData = async() => {
        let location = ('https://api.mobula.io/api/1/market/data?symbol='+ coin)
        try {
          const {data} = await axios.get(location, options) 
          responseBody = data;
        return data;
      } catch(error) {toast.error('Token ticker is not valid. Try again…');
          responseBody.data.price = 'N/A';
          responseBody.data.logo = null;
          responseBody.data.name = 'Unknown Token';
          responseBody.data.price_change_1m = '';
          responseBody.data.price_change_7d = '';
        return null}}
                
      (async () => {
        await getData();
        const keys = Object.keys(responseBody.data)
        price = responseBody.data.price;
        console.log("price: "+ price)
        logo = responseBody.data.logo
        console.log("logo: " + logo)
        name = responseBody.data.name
        priceChange7D = Number(responseBody.data.price_change_7d).toFixed(2)
        priceChange1M = Number(responseBody.data.price_change_1m).toFixed(2)
    
        //output = `${name} (${output}): ${price}\n7-Day Price Chg: ${priceChange7D}`;

        output = name + " ("+ output + "): "+ price 

        console.log ("output: " + output)
        setGreeterMessage(output)  //New position
        console.log("7D: "+ priceChange7D)
        console.log("1M: "+ priceChange1M)
        if ((Number(priceChange7D) < 0.9 * Number(priceChange1M)) || (Number(priceChange1M) - Number(priceChange7D) > 5)) {
          toast.error('Declining Trend: ' + '\n' + 'Seven-day price change: ' + priceChange7D + '\n' +
          'One-month price change: ' + priceChange1M)
        }
      })();
    //End New Code
      //setGreeterMessage(output) Originally not commented

      // Alternatively: Fetch it with typed contract instance
      const typedResult = await typedContract.query.greet()
      console.log('Result from typed contract: ', typedResult.value)
      //New Code
      let temp_var = (JSON.parse(JSON.stringify(typedResult.value)))
      coin = temp_var["ok"]
    
    } catch (e) {
      console.error(e)
      toast.error('Error while fetching greeting. Try again…')
      setGreeterMessage(undefined)
    } finally {
      setFetchIsLoading(false)
    }
  }
  useEffect(() => {
    fetchGreeting()
  }, [typedContract])

  // Update Greeting
  const updateGreeting: SubmitHandler<z.infer<typeof formSchema>> = async ({ newMessage }) => {
    if (!activeAccount || !contract || !activeSigner || !api) {
      toast.error('Wallet not connected. Try again…')
      return
    }

    try {
      await contractTxWithToast(api, activeAccount.address, contract, 'setMessage', {}, [
        newMessage,
      ])
      reset()
    } catch (e) {
      console.error(e)
    } finally {
      fetchGreeting()
    }
  }

  if (!api) return null

  return (
    <>
      <div className="flex max-w-[22rem] grow flex-col gap-4">
        <h2 className="text-center font-mono text-gray-400">Token Price Discovery</h2>

        <Form {...form}>
          {/* Fetched Greeting */}
          <Card style={{ backgroundImage: `url(${logo})`,
              backgroundSize: '16% 48%',
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat'}}>
            <CardContent className="pt-6">
              <FormItem>
                <FormLabel className="text-base">Current Price</FormLabel>
                <FormControl style={{ width: '270px', height: '50px' }}> 
                  <Input
                    placeholder={fetchIsLoading || !contract ? 'Loading…' : greeterMessage}
                    disabled={true}
                  />
                </FormControl>
              </FormItem>
            </CardContent>
          </Card>

          {/* Update Greeting */}
          <Card>
            <CardContent className="pt-6">
              <form
                onSubmit={handleSubmit(updateGreeting)}
                className="flex flex-col justify-end gap-2"
              >
                <FormItem>
                  <FormLabel className="text-base">Enter Token Symbol:</FormLabel>
                  <FormControl>
                    <div className="flex gap-2">
                      <Input disabled={form.formState.isSubmitting} {...register('newMessage')} />
                      <Button
                        type="submit"
                        className="bg-primary font-bold"
                        disabled={fetchIsLoading || form.formState.isSubmitting}
                        isLoading={form.formState.isSubmitting}
                      >
                        Submit
                      </Button>
                    </div>
                  </FormControl>
                </FormItem>
              </form>
            </CardContent>
          </Card>
        </Form>

        {/* Contract Address */}
        <p className="text-center font-mono text-xs text-gray-600">
          {contract ? contractAddress : 'Loading…'}
        </p>
      </div>
    </>
  )
}
