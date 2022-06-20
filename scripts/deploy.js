const main = async () => {
    try {
      const bullbearContractFactory = await hre.ethers.getContractFactory(
        "BullBear"
      );
      const bullBearContract = await bullbearContractFactory.deploy(3600,"0xECe365B379E1dD183B20fc5f022230C044d51404","0x6168499c0cFfCaCD319c818142124B7A15E857ab");
      await bullBearContract.deployed();
  
      console.log("Contract deployed to:", bullBearContract.address);
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
    
  main();