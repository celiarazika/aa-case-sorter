dataSetVersion = "2025-05-04"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain games",
    checked: false,
    sub: [
      { name: "Phoenix Wright: Ace Attorney", key: "aa1" },
      { name: "Ace Attorney: Justice for All", key: "aa2" },
      { name: "Ace Attorney: Trials & Tribulations", key: "aa3" },
      { name: "Apollo Justice: Ace Attorney", key: "aa4" },
      { name: "Ace Attorney: Dual Destines", key: "aa5" },
      { name: "Ace Attorney: Spirit of Justice", key: "aa6" },
      { name: "Ace Attorney Investigations: Miles Edgeworth", key: "aai1" },
      { name: "Ace Attorney Investigations 2: Prosecutor's Gambit", key: "aai2"},
      { name: "The Great Ace Attorney: Adventures", key: "dgs1" },
      { name: "The Great Ace Attorney 2: Resolve", key: "dgs2" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "The First Turnabout",
    img: "11.jpg",
    opts: {
      series: "aa1"
    }
  },
  {
    name: "Turnabout Sisters",
    img: "12.jpg",
    opts: {
      series: "aa1"
    }
  },
  {
    name: "Turnabout Samurai",
    img: "13.jpg",
    opts: {
      series: "aa1"
    }
  },
  {
    name: "Turnabout Goodbyes",
    img: "14.jpg",
    opts: {
      series: "aa1"
    }
  },
  {
    name: "Rise from the Ashes",
    img: "15.jpg",
    opts: {
      series: "aa1"
    }
  },
  {
    name: "The Lost Turnabout",
    img: "21.jpg",
    opts: {
      series: "aa2"
    }
  },
  {
    name: "Reunion, and Turnabout",
    img: "22.jpg",
    opts: {
      series: "aa2"
    }
  },
  {
    name: "Turnabout Big Top",
    img: "23.jpg",
    opts: {
      series: "aa2"
    }
  },
  {
    name: "Farewell, My Turnabout",
    img: "24.jpg",
    opts: {
      series: "aa2"
    }
  },
  {
    name: "Turnabout Memories",
    img: "31.jpg",
    opts: {
      series: "aa3"
    }
  },
  {
    name: "The Stolen Turnabout",
    img: "32.jpg",
    opts: {
      series: "aa3"
    }
  },
  {
    name: "Recipe for Turnabout",
    img: "33.jpg",
    opts: {
      series: "aa3"
    }
  },
  {
    name: "Turnabout Beginnings",
    img: "34.jpg",
    opts: {
      series: "aa3"
    }
  },
  {
    name: "Bridge to the Turnabout",
    img: "35.jpg",
    opts: {
      series: "aa3"
    }
  },
  {
    name: "Turnabout Trump",
    img: "41.jpg",
    opts: {
      series: "aa4"
    }
  },
  {
    name: "Turnabout Corner",
    img: "42.jpg",
    opts: {
      series: "aa4"
    }
  },
  {
    name: "Turnabout Serenade",
    img: "43.jpg",
    opts: {
      series: "aa4"
    }
  },
  {
    name: "Turnabout Succession",
    img: "44.jpg",
    opts: {
      series: "aa4"
    }
  },
  {
    name: "Turnabout Countdown",
    img: "51.jpg",
    opts: {
      series: "aa5"
    }
  },
  {
    name: "The Monstrous Turnabout",
    img: "52.jpg",
    opts: {
      series: "aa5"
    }
  },
  {
    name: "Turnabout Academy",
    img: "53.jpg",
    opts: {
      series: "aa5"
    }
  },
  {
    name: "The Cosmic Turnabout",
    img: "54.jpg",
    opts: {
      series: "aa5"
    }
  },
  {
    name: "Turnabout for Tomorrow",
    img: "55.jpg",
    opts: {
      series: "aa5"
    }
  },
  {
    name: "Turnabout Reclaimed",
    img: "56.jpg",
    opts: {
      series: "aa5"
    }
  },
  {
    name: "The Foreign Turnabout",
    img: "61.jpg",
    opts: {
      series: "aa6"
    }
  },
  {
    name: "The Magical Turnabout",
    img: "62.jpg",
    opts: {
      series: "aa6"
    }
  },
  {
    name: "The Rite of Turnabout",
    img: "63.jpg",
    opts: {
      series: "aa6"
    }
  },
  {
    name: "Turnabout Storyteller",
    img: "64.jpg",
    opts: {
      series: "aa6"
    }
  },
  {
    name: "Turnabout Revolution",
    img: "65.jpg",
    opts: {
      series: "aa6"
    }
  },
  {
    name: "Turnabout Time Traveler",
    img: "66.jpg",
    opts: {
      series: "aa6"
    }
  },
  {
    name: "Turnabout Visitor",
    img: "i1.jpg",
    opts: {
      series: "aai1"
    }
  },
  {
    name: "Turnabout Airlines",
    img: "i2.jpg",
    opts: {
      series: "aai1"
    }
  },
  {
    name: "The Kidnapped Turnabout",
    img: "i3.jpg",
    opts: {
      series: "aai1"
    }
  },
  {
    name: "Turnabout Reminiscence",
    img: "i4.jpg",
    opts: {
      series: "aai1"
    }
  },
  {
    name: "Turnabout Ablaze",
    img: "i5.jpg",
    opts: {
      series: "aai1"
    }
  },
  {
  	name:"Turnabout Trigger",
    img: "i21.jpg",
    opts: {
      series: "aai2"
    }
  },
  {
    name: "The Captive Turnabout",
    img: "i22.jpg",
    opts: {
      series: "aai2"
    }
  },
  {
    name: "Turnabout Legacy",
    img: "i23.jpg",
    opts: {
      series: "aai2"
    }
  },
  {
    name: "A Turnabout Forsaken",
    img: "i24.jpg",
    opts: {
      series: "aai2"
    }
  },
  {
    name: "Turnabout for the Ages",
    img: "i25.jpg",
    opts: {
      series: "aai2"
    }
  },
  {
    name: "The Adventure of the Great Departure",
    img: "dgs1.jpg",
    opts: {
      series: "dgs1"
    }
  },
  {
    name: "The Adventure of the Unbreakable Speckled Band",
    img: "dgs2.jpg",
    opts: {
      series: "dgs1"
    }
  },
  {
  	name:"The Adventure of the Runaway Room",
  	img:"dgs3.jpg",
  	opts:{
  		series:"dgs1"
  	}
  },
  {
  	name:"The Adventure of the Clouded Kokoro",
  	img:"dgs4.jpg",
  	opts:{
  		series:"dgs1"
  	}
  },
  {
  	name:"The Adventure of the Unspeakable Story",
  	img:"dgs5.jpg",
  	opts:{
  		series:"dgs1"
  	}
  },
  {
  	name:"The Adventure of the Blossoming Attorney",
    img:"dgs21.jpg",
    opts:{
      series:"dgs2"
    }
  },
  {
  	name:"The Memoirs of the Clouded Kokoro",
  	img:"dgs22.jpg",
  	opts:{
  		series:"dgs2"
  	}
  },
  {
  	name:"The Return of the Great Departed Soul",
  	img:"dgs23.jpg",
  	opts:{
  		series:"dgs2"
  	}
  },
  {
  	name:"Twisted Karma and His Last Bow",
    img:"dgs24.jpg",
    opts:{
      series:"dgs2"
    }
  },
  {
    name: "The Resolve of Ryunosuke Naruhodo",
    img: "dgs25.jpg",
    opts: {
      series: "dgs2"
    }
  }
];
