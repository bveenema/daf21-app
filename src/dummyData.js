let mixers = {mixer: [
    {
      id: "0121",
      job: {
        site:"Barnes Airport Hanger 12",
        number: "0121-C",
        size: "4570 sqft",
      },
      settings: {
        material: "ShopFloor",
        mixOutput: "2.5 Gallons",
        purge: "5 Seconds",
      },
      conditions: {
        roomTemp: "70F",
        humidity: "60%",
        floorTemp: "68F",
      },
      status: "In Process",
      shots: {
        date: "02/19/19",
        statuses: [
          {time: "7:22", status: "good"},
          {time: "7:27", status: "good"},
          {time: "7:33", status: "good"},
          {time: "7:38", status: "good"},
          {time: "7:41", status: "good"},
          {time: "7:45", status: "good"},
          {time: "13:49", status: "good"},
          {time: "15:11", status: "good"},
          {status: "incomplete"},
          {status: "incomplete"},
          {status: "incomplete"},
          {status: "incomplete"},
        ]
      },
    },
    {
      id: "0122",
      job: {
        site:"Dexter Mfg. Test Lab Cleanroom",
        number: "0122-C",
        size: "1000 sqft",
      },
      settings: {
        material: "DuraGlaze #4",
        mixOutput: "2.5 Gallons",
        purge: "5 Seconds",
      },
      conditions: {
        roomTemp: "70F",
        humidity: "60%",
        floorTemp: "68F",
      },
      status: "Complete",
      shots: {
        date: "08/30/18",
        statuses: [
          {time: "13:22", status: "good"},
          {time: "14:27", status: "good"},
          {time: "15:33", status: "good"},
          {time: "16:38", status: "good"},
          {time: "17:41", status: "good"},
        ]
      },
    },
    {
      id: "0123",
      job: {
        site:"Pratt & Whitney Maintenance Crib",
        number: "0123-C",
        size: "12000 sqft",
      },
      settings: {
        material: "MasterMix 5000",
        mixOutput: "1 Gallon",
        purge: "1 Second",
      },
      conditions: {
        roomTemp: "70F",
        humidity: "60%",
        floorTemp: "68F",
      },
      status: "Incomplete",
      shots: {
        date: "02/19/19",
        statuses: [
          {time: "7:22", status: "good"},
          {time: "7:27", status: "good"},
          {time: "7:33", status: "good"},
          {time: "7:38", status: "good"},
          {time: "7:41", status: "good"},
          {time: "7:45", status: "good"},
          {time: "13:49", status: "good"},
          {time: "15:51", status: "error"},
          {status: "incomplete"},
          {status: "incomplete"},
          {status: "incomplete"},
          {status: "incomplete"},
        ]
      },
    },
  ]
}

export default mixers;
