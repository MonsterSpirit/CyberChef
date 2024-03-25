import TestRegister from "../../lib/TestRegister.mjs";

TestRegister.addTests([
    {
        name: "ASCII to Hex stream",
        input: "aberystwyth",
        expectedOutput: "6162657279737477797468",
        recipeConfig: [
            {
                "op": "编码 Hex",
                "args": [
                    "None",
                    0
                ]
            },
        ]
    },
    {
        name: "ASCII to Hex with colon deliminator ",
        input: "aberystwyth",
        expectedOutput: "61:62:65:72:79:73:74:77:79:74:68",
        recipeConfig: [
            {
                "op": "编码 Hex",
                "args": [
                    "Colon",
                    0
                ]
            }
        ]
    },
    {
        name: "ASCII to 0x Hex with comma",
        input: "aberystwyth",
        expectedOutput: "0x61,0x62,0x65,0x72,0x79,0x73,0x74,0x77,0x79,0x74,0x68",
        recipeConfig: [
            {
                "op": "编码 Hex",
                "args": [
                    "0x with comma",
                    0
                ]
            }
        ]
    },
    {
        name: "ASCII to 0x Hex with comma and line breaks",
        input: "aberystwyth",
        expectedOutput: "0x61,0x62,0x65,0x72,\n0x79,0x73,0x74,0x77,\n0x79,0x74,0x68",
        recipeConfig: [
            {
                "op": "编码 Hex",
                "args": [
                    "0x with comma",
                    4
                ]
            }
        ]
    },
    {
        name: "Hex stream to UTF-8",
        input: "e69591e69591e5ada9e5ad90",
        expectedOutput: "救救孩子",
        recipeConfig: [
            {
                "op": "解码 Hex",
                "args": [
                    "Auto"
                ]
            }
        ]

    },
    {
        name: "Multiline 0x hex to ASCII",
        input: "0x49,0x20,0x73,0x61,0x77,0x20,0x6d,0x79,0x73,0x65,0x6c,0x66,0x20,0x73,0x69,\
0x74,0x74,0x69,0x6e,0x67,0x20,0x69,0x6e,0x20,0x74,0x68,0x65,0x20,0x63,0x72,\
0x6f,0x74,0x63,0x68,0x20,0x6f,0x66,0x20,0x74,0x68,0x65,0x20,0x74,0x68,0x69,\
0x73,0x20,0x66,0x69,0x67,0x20,0x74,0x72,0x65,0x65,0x2c,0x20,0x73,0x74,0x61,\
0x72,0x76,0x69,0x6e,0x67,0x20,0x74,0x6f,0x20,0x64,0x65,0x61,0x74,0x68,0x2c,\
0x20,0x6a,0x75,0x73,0x74,0x20,0x62,0x65,0x63,0x61,0x75,0x73,0x65,0x20,0x49,\
0x20,0x63,0x6f,0x75,0x6c,0x64,0x6e,0x27,0x74,0x20,0x6d,0x61,0x6b,0x65,0x20,\
0x75,0x70,0x20,0x6d,0x79,0x20,0x6d,0x69,0x6e,0x64,0x20,0x77,0x68,0x69,0x63,\
0x68,0x20,0x6f,0x66,0x20,0x74,0x68,0x65,0x20,0x66,0x69,0x67,0x73,0x20,0x49,\
0x20,0x77,0x6f,0x75,0x6c,0x64,0x20,0x63,0x68,0x6f,0x6f,0x73,0x65,0x2e",
        expectedOutput: "I saw myself sitting in the crotch of the this fig tree, starving to death, just because I couldn't make up my mind which of the figs I would choose.",
        recipeConfig: [
            {
                "op": "解码 Hex",
                "args": [
                    "Auto"
                ]
            }
        ]
    },
    {
        name: "0x with Comma to Ascii",
        input: "0x74,0x65,0x73,0x74,0x20,0x73,0x74,0x72,0x69,0x6e,0x67",
        expectedOutput: "test string",
        recipeConfig: [
            {
                "op": "解码 Hex",
                "args": [
                    "0x with comma"
                ]
            }
        ]

    },
]);
