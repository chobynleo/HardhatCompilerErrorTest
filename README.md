# HardhatCompilerErrorTest
when using different hardhat config of compilers may got CompilerError: Stack too deep  

config:
```
solidity: {
    compilers: [    
          {version: "0.7.6"},
      ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    },
  },
```
and then got this error:
> CompilerError: Stack too deep when compiling inline assembly: Variable headStart is 1 slot(s) too deep inside the stack.

but If set config:
```
solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    },
  },
```
Compilation successfully.