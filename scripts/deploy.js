async function main() {
  console.log("🚀 Deploying Greeter to Base...");

  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello from Base! 👋");

  await greeter.waitForDeployment();

  const address = await greeter.getAddress();
  console.log("✅ Greeter deployed successfully!");
  console.log("📍 Contract Address:", address);
  console.log("🔗 View on Basescan: https://sepolia.basescan.org/address/" + address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exitCode = 1;
  });
