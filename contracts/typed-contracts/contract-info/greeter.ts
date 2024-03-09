export const ContractAbi = `{"source":{"hash":"0x35c04f9065bc76ffdeee9ffc54a78056089e55b6ff3b254d09d09fb99aed1021","language":"ink! 4.3.0","compiler":"rustc 1.76.0","build_info":{"build_mode":"Release","cargo_contract_version":"3.2.0","rust_toolchain":"stable-x86_64-unknown-linux-gnu","wasm_opt_settings":{"keep_debug_symbols":false,"optimization_passes":"Z"}}},"contract":{"name":"greeter","version":"0.0.1","authors":["Scio Labs <hello@scio.xyz>"]},"spec":{"constructors":[{"args":[{"label":"init_value","type":{"displayName":["String"],"type":0}}],"default":false,"docs":["Creates a new greeter contract initialized with the given value."],"label":"new","payable":false,"returnType":{"displayName":["ink_primitives","ConstructorResult"],"type":1},"selector":"0x9bae9d5e"},{"args":[],"default":false,"docs":["Creates a new greeter contract initialized to 'Hello ink!'."],"label":"default","payable":false,"returnType":{"displayName":["ink_primitives","ConstructorResult"],"type":1},"selector":"0xed4b9d1b"}],"docs":[],"environment":{"accountId":{"displayName":["AccountId"],"type":6},"balance":{"displayName":["Balance"],"type":9},"blockNumber":{"displayName":["BlockNumber"],"type":12},"chainExtension":{"displayName":["ChainExtension"],"type":13},"hash":{"displayName":["Hash"],"type":10},"maxEventTopics":4,"timestamp":{"displayName":["Timestamp"],"type":11}},"events":[{"args":[{"docs":[],"indexed":false,"label":"from","type":{"displayName":["Option"],"type":5}},{"docs":[],"indexed":false,"label":"message","type":{"displayName":["String"],"type":0}}],"docs":[],"label":"Greeted"}],"lang_error":{"displayName":["ink","LangError"],"type":3},"messages":[{"args":[],"default":false,"docs":[" Returns the current value of \`message\`."],"label":"greet","mutates":false,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":4},"selector":"0x052cda08"},{"args":[{"label":"new_value","type":{"displayName":["String"],"type":0}}],"default":false,"docs":[" Sets \`message\` to the given value."],"label":"set_message","mutates":true,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":1},"selector":"0x1fe7426f"}]},"storage":{"root":{"layout":{"struct":{"fields":[{"layout":{"leaf":{"key":"0x00000000","ty":0}},"name":"message"}],"name":"Greeter"}},"root_key":"0x00000000"}},"types":[{"id":0,"type":{"def":{"primitive":"str"}}},{"id":1,"type":{"def":{"variant":{"variants":[{"fields":[{"type":2}],"index":0,"name":"Ok"},{"fields":[{"type":3}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":2},{"name":"E","type":3}],"path":["Result"]}},{"id":2,"type":{"def":{"tuple":[]}}},{"id":3,"type":{"def":{"variant":{"variants":[{"index":1,"name":"CouldNotReadInput"}]}},"path":["ink_primitives","LangError"]}},{"id":4,"type":{"def":{"variant":{"variants":[{"fields":[{"type":0}],"index":0,"name":"Ok"},{"fields":[{"type":3}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":0},{"name":"E","type":3}],"path":["Result"]}},{"id":5,"type":{"def":{"variant":{"variants":[{"index":0,"name":"None"},{"fields":[{"type":6}],"index":1,"name":"Some"}]}},"params":[{"name":"T","type":6}],"path":["Option"]}},{"id":6,"type":{"def":{"composite":{"fields":[{"type":7,"typeName":"[u8; 32]"}]}},"path":["ink_primitives","types","AccountId"]}},{"id":7,"type":{"def":{"array":{"len":32,"type":8}}}},{"id":8,"type":{"def":{"primitive":"u8"}}},{"id":9,"type":{"def":{"primitive":"u128"}}},{"id":10,"type":{"def":{"composite":{"fields":[{"type":7,"typeName":"[u8; 32]"}]}},"path":["ink_primitives","types","Hash"]}},{"id":11,"type":{"def":{"primitive":"u64"}}},{"id":12,"type":{"def":{"primitive":"u32"}}},{"id":13,"type":{"def":{"variant":{}},"path":["ink_env","types","NoChainExtension"]}}],"version":"4"}`;
export const ContractFile = `{"source":{"hash":"0x35c04f9065bc76ffdeee9ffc54a78056089e55b6ff3b254d09d09fb99aed1021","language":"ink! 4.3.0","compiler":"rustc 1.76.0","wasm":"0x0061736d0100000001290760027f7f0060037f7f7f0060047f7f7f7f017f60037f7f7f017f60000060047f7f7f7f006000017f02b10109057365616c310b6765745f73746f726167650002057365616c301176616c75655f7472616e736665727265640000057365616c3005696e7075740000057365616c300663616c6c65720000057365616c300f686173685f626c616b65325f3235360001057365616c300d6465706f7369745f6576656e740005057365616c320b7365745f73746f726167650002057365616c300b7365616c5f72657475726e000103656e76066d656d6f72790201021003121103030001060100010001000000000004040608017f01418080040b0711020463616c6c0017066465706c6f7900180af01c112b01017f037f2002200346047f200005200020036a200120036a2d00003a0000200341016a21030c010b0b0b8e0101017f20002d00042103200041003a0004027f0240200304402001200041056a2d00003a00004101200028020022002802042203200241016b2202490d021a200141016a20002802002201200210081a0c010b41012000280200220028020422032002490d011a200120002802002201200210081a0b2000200320026b3602042000200120026a36020041000b0b2601017f230041106b220224002002200036020c20012002410c6a4104100b200241106a24000b4801027f024002402000280208220320026a22042003490d00200420002802044b0d00200420036b2002470d01200028020020036a2001200210081a200020043602080f0b000b000b4d02017f027e230041206b2200240020004200370308200042003703002000411036021c20002000411c6a10012000290308210120002903002102200041206a2400410541042001200284501b0bab0101017f024002402001450440410121020c010b20014100480d01200245044041a482052d00001a0b419c8204280200220220016a22032002490d0141a082042802002003490440200141ffff036a22034110764000220241ffff034b0d022002411074220220034180807c716a22032002490d0241a082042003360200200120026a22032002490d020b419c820420033602002002450d010b20002002360204200020013602000f0b000b7401017f230041106b2202240002402000413f4d04402001200041027410160c010b200041ffff004d0440200220004102744101723b010e20012002410e6a4102100b0c010b200041ffffffff034d044020004102744102722001100a0c010b20014103101620002001100a0b200241106a24000b100020012002100e200220002001100b0b0a00200120004120100b0b4801027f230041106b22032400200341086a20024100100d20032802082104200328020c2001200210082101200020023602082000200136020420002004360200200341106a24000bdc0701097f230041206b220324000240024020012802042204450d00200128020022052d000021022001200441016b3602042001200541016a36020002400240024002400240200241037141016b0e03020301000b200241027621020c030b2004410549200241034b720d03200528000121022001200441056b3602042001200541056a36020020024180808080044f0d020c030b200341196a20023a0000200341013a001820032001360214200341003b011c200341146a2003411c6a410210090d0220032f011c220241ff014d0d02200241027621020c010b200341196a20023a0000200341013a0018200320013602142003410036021c200341146a2003411c6a410410090d01200328021c220241808004490d01200241027621020b20012802042002490d00200341086a20024101100d200128020422052002490d0020032802082108200328020c200128020022062002100821042001200520026b3602042001200220066a3602002008418080808078460d0002402002450d00200241076b22014100200120024d1b2109200441036a417c7120046b210a4100210103400240024002400240024002400240024002400240200120046a2d00002205411874411875220741004804402005419a80046a2d000041026b0e03030102080b200a20016b410371450440200120094f0d090340200120046a220541046a280200200528020072418081828478710d0a2009200141086a22014b0d000b0c090b200141016a21010c090b200141016a220620024f0d06200420066a2c000021060240200541e001470440200541ed01460d012007411f6a41ff0171410c490d042007417e71416e470d0820064140480d050c080b200641607141a07f460d040c070b2006419f7f4a0d060c030b200141016a220620024f0d05200420066a2c000021060240024002400240200541f0016b0e050100000002000b2007410f6a41ff017141024b0d0820064140480d020c080b200641f0006a41ff01714130490d010c070b2006418f7f4a0d060b200141026a220520024f0d05200420056a2c000041bf7f4a0d05200141036a220120024f0d05200120046a2c000041bf7f4a0d050c040b200141016a22012002490d020c040b200641404e0d030b200141026a220120024f0d02200120046a2c000041bf7f4c0d010c020b200120046a2c000041bf7f4a0d010b200141016a21010c020b20004180808080783602000c050b200120024f0d000340200120046a2c00004100480d012002200141016a2201470d000b0c020b20012002490d000b0b2000200236020820002008ad2004ad422086843702000c010b20004180808080783602000b200341206a24000b3c01027f027f200145044041a48204210141010c010b4101210241a4820441013a000041a58204210141020b2103200120023a0000200020031015000b8f0101047f230041106b22022400200242808001370208200241a482043602044100200241046a100a024020022802082205200228020c2203490d00200228020421042002410036020c2002200520036b3602082002200320046a36020420002001200241046a100f200228020c220020022802084b0d00200420032002280204200010061a200241106a24000f0b000b0d00200041a4820420011007000b2d01017f2000280208220220002802044904402000200241016a360208200028020020026a20013a00000f0b000bf30a020e7f017e230041306b2201240002400240100c41ff01714105470d0020014180800136022041a48204200141206a100220012802202200418180014f0d00024020004104490d00200141a8820436020c2001200041046b36021041a782042d0000210041a682042d0000210241a582042d00002104024041a482042d00002203411f47044020034105472004412c4772200241da0147200041084772720d0241808080807821000c010b200441e70147200241c2004772200041ef0047720d01200141206a2001410c6a101220012802202200418080808078460d01200120012800253602182001200141286a28000036001b20012d002421050b2001200128001b36000720012001280218360204200142808001370224200141a482043602204100200141206a100a2001280224220320012802282202490d01200128022021042001200320026b220336022020042002200220046a2202200141206a100020032001280220220449720d012001200436021c20012002360218200141206a200141186a10122001280220418080808078460d0120012001290224220e3702102000418080808078470d02200141206a2200200ea7200e422088a71011230041106b22012400200141808001360208200141a482043602040240200028020041808080807846044041a482044181023b0100410221000c010b2001410136020c41a4820441003a000020002802042000280208200141046a100f200128020c220041818001490d00000b410020001015000b410141011013000b000b200141286a2001280007360000200120053a0024200120003602202001200128020436002523004180016b22002400200141206a2202280200210320022802042105200041086a200228020822044100100d20002802082106200028020c20052004100821072001410c6a22022004360208200220073602042002200636020020004180800136021041a48204200041106a100341a482042d00002102200041356a41bc82042900003700002000412e6a41b58204290000370100200041266a41ad8204290000370100200041a5820429000037011e200020023a001d200041013a001c200020043602182000200536021420002003360210200042808001370264200041a482043602604101200041e0006a100e0240024020002802682203418180014f0d002000410036026820004180800120036b22073602642000200341a482046a2208360260418080044100200041e0006a2202100f2002418080044110100b2000280268220220002802644b0d0020002802602106200041d8006a22094200370300200041d0006a4200370300200041c8006a220a4200370300200042003703400240200241214f0440200041f8006a220b4200370300200041f0006a220c4200370300200041e8006a220d42003703002000420037036020062002200041e0006a10042009200b290300370300200041d0006a200c290300370300200a200d290300370300200020002903603703400c010b200041406b2006200210081a0b200041f8006a200041d8006a290300370300200041f0006a200041d0006a290300370300200041e8006a200041c8006a29030037030020002000290340370360200041003602482000200736024420002008360240200041e0006a200041406b10102003200320002802486a22024b2002418180014f720d0020004180800120026b3602642000200241a482046a2203360260200241808001460d00200341003a0000200241ffff004f0d00200341013a0001200041023602682000411d6a200041e0006a22031010200520042003100f2000280268220420002802644b0d0041a48204200220002802602004100520004180016a24000c010b000b200128021020012802141014410041001013000b8f0201057f230041206b22002400024002400240100c41ff01714105470d0020004180800136021441a48204200041146a100220002802142201418180014f0d0020014104490d01200041a8820436020c2000200141046b36021041a782042d0000210141a682042d0000210241a582042d00002103024041a482042d0000220441ed014704402004419b0147200341ae0147722002419d0147720d03200141de00460d010c030b200341cb00472002419d0147722001411b47720d02200041146a41908004410a10110c030b200041146a2000410c6a10122000280214418080808078460d010c020b000b410141011013000b2000280218200028021c101441a4820441003b0100410041021015000b0bdd010200418080040b9a01477265657465723a3a4772656574656448656c6c6f20696e6b2101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010041dc81040b33020202020202020202020202020202020202020202020202020202020202030303030303030303030303030303030404040404","build_info":{"build_mode":"Release","cargo_contract_version":"3.2.0","rust_toolchain":"stable-x86_64-unknown-linux-gnu","wasm_opt_settings":{"keep_debug_symbols":false,"optimization_passes":"Z"}}},"contract":{"name":"greeter","version":"0.0.1","authors":["Scio Labs <hello@scio.xyz>"]},"spec":{"constructors":[{"args":[{"label":"init_value","type":{"displayName":["String"],"type":0}}],"default":false,"docs":["Creates a new greeter contract initialized with the given value."],"label":"new","payable":false,"returnType":{"displayName":["ink_primitives","ConstructorResult"],"type":1},"selector":"0x9bae9d5e"},{"args":[],"default":false,"docs":["Creates a new greeter contract initialized to 'Hello ink!'."],"label":"default","payable":false,"returnType":{"displayName":["ink_primitives","ConstructorResult"],"type":1},"selector":"0xed4b9d1b"}],"docs":[],"environment":{"accountId":{"displayName":["AccountId"],"type":6},"balance":{"displayName":["Balance"],"type":9},"blockNumber":{"displayName":["BlockNumber"],"type":12},"chainExtension":{"displayName":["ChainExtension"],"type":13},"hash":{"displayName":["Hash"],"type":10},"maxEventTopics":4,"timestamp":{"displayName":["Timestamp"],"type":11}},"events":[{"args":[{"docs":[],"indexed":false,"label":"from","type":{"displayName":["Option"],"type":5}},{"docs":[],"indexed":false,"label":"message","type":{"displayName":["String"],"type":0}}],"docs":[],"label":"Greeted"}],"lang_error":{"displayName":["ink","LangError"],"type":3},"messages":[{"args":[],"default":false,"docs":[" Returns the current value of \`message\`."],"label":"greet","mutates":false,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":4},"selector":"0x052cda08"},{"args":[{"label":"new_value","type":{"displayName":["String"],"type":0}}],"default":false,"docs":[" Sets \`message\` to the given value."],"label":"set_message","mutates":true,"payable":false,"returnType":{"displayName":["ink","MessageResult"],"type":1},"selector":"0x1fe7426f"}]},"storage":{"root":{"layout":{"struct":{"fields":[{"layout":{"leaf":{"key":"0x00000000","ty":0}},"name":"message"}],"name":"Greeter"}},"root_key":"0x00000000"}},"types":[{"id":0,"type":{"def":{"primitive":"str"}}},{"id":1,"type":{"def":{"variant":{"variants":[{"fields":[{"type":2}],"index":0,"name":"Ok"},{"fields":[{"type":3}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":2},{"name":"E","type":3}],"path":["Result"]}},{"id":2,"type":{"def":{"tuple":[]}}},{"id":3,"type":{"def":{"variant":{"variants":[{"index":1,"name":"CouldNotReadInput"}]}},"path":["ink_primitives","LangError"]}},{"id":4,"type":{"def":{"variant":{"variants":[{"fields":[{"type":0}],"index":0,"name":"Ok"},{"fields":[{"type":3}],"index":1,"name":"Err"}]}},"params":[{"name":"T","type":0},{"name":"E","type":3}],"path":["Result"]}},{"id":5,"type":{"def":{"variant":{"variants":[{"index":0,"name":"None"},{"fields":[{"type":6}],"index":1,"name":"Some"}]}},"params":[{"name":"T","type":6}],"path":["Option"]}},{"id":6,"type":{"def":{"composite":{"fields":[{"type":7,"typeName":"[u8; 32]"}]}},"path":["ink_primitives","types","AccountId"]}},{"id":7,"type":{"def":{"array":{"len":32,"type":8}}}},{"id":8,"type":{"def":{"primitive":"u8"}}},{"id":9,"type":{"def":{"primitive":"u128"}}},{"id":10,"type":{"def":{"composite":{"fields":[{"type":7,"typeName":"[u8; 32]"}]}},"path":["ink_primitives","types","Hash"]}},{"id":11,"type":{"def":{"primitive":"u64"}}},{"id":12,"type":{"def":{"primitive":"u32"}}},{"id":13,"type":{"def":{"variant":{}},"path":["ink_env","types","NoChainExtension"]}}],"version":"4"}`;