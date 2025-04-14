// The node program captures the local performance data
// and sends it via socket to the server
// Req:
// - socket.io-client

const os = require("os"); // native to node

const cpuAverage = () => {
  const cpus = os.cpus();
  // cpus is an array of all cores. wwe needthe average of all the cores which will give us the cpu average.
  let idleMs = 0;
  let totalMs = 0;

  cpus.forEach((aCore) => {
    // loop thourgh of each propety of the current core
    for (mode in aCore.times) {
      // We need all modes for this core added to totalMs
      totalMs += aCore.times[mode];
    }
    // We need idle mode for this core added to idleMs
    idleMs += aCore.times.idle;
  });
  return {
    idle: idleMs / cpus.length,
    total: totalMs / cpus.length,
  };
};

// Because the times property on cpus is time since boot, we will get now times and
// 100ms from now times and compare them that will give usthe current load
const getCpuLoad = () => {
  const cpus = os.cpus();
  return new Promise((resolve, reject) => {
    const start = cpuAverage(cpus); // "now value of load"
    setTimeout(() => {
      const end = cpuAverage(cpus); // "end value of load"
      const idleDiff = end.idle - start.idle;
      const totalDiff = end.total - start.idle;
      // console.log("Idle Different: ", idleDiff, "\nTotal Different: ", totalDiff);
      // Calculate the precented of the used cpu
      const precentCpu = 100 - Math.floor((100 * idleDiff) / totalDiff); // %
      resolve(precentCpu);
      // console.log(precentCpu);
    }, 100);
  });
};

const preformanceLoadData = () =>
  new Promise(async (resolve, reject) => {
    // What do we need to know FROM NODE about preformance ?
    // - CPU load (current)
    const cpus = os.cpus(); // all cpus as on array
    // console.log("Cpu data: ", cpus);
    // - Memory Usage
    // - total ram
    const totalMem = os.totalmem(); // in bytes
    // console.log("Total memoery: ", totalMem);

    // - free ram
    const freeMeme = os.freemem(); // in bytes
    // console.log("Free memoery: ", freeMeme);

    // Memory usage -
    const usedMem = totalMem - freeMeme;
    // console.log("Used memory of system: ", usedMem);
    const memeUseage = Math.floor((usedMem / totalMem) * 100) / 100; // 2 decimal places
    // console.log("Memory in use: ", memeUseage);

    // - OS Type
    const osType = os.type() === "Darwin" ? "Mac" : os.type();
    // console.log("System type: ", osType);

    // - Uptime
    const upTime = os.uptime();
    // console.log("Uptime: ", upTime);

    // - CPU info
    // - type
    const cpuType = cpus[0].model;
    // console.log("CPU type: ", cpuType);
    // - Number of cors
    const numCores = cpus.length;
    // console.log("Number of cores: ", cpuCores);
    // - Clock speed
    const cpuSpeed = cpus[0].speed;
    // console.log("CPU Speed: ", cpuSpeed);

    const cpuLoad = await getCpuLoad();
    resolve({
      freeMeme,
      totalMem,
      usedMem,
      memeUseage,
      osType,
      upTime,
      cpuType,
      numCores,
      cpuSpeed,
      cpuLoad,
    });
  });

const run = async () => {
  const data = await preformanceLoadData();
  console.log(data);
};

run();