let generalSettings = new Map();
let trialSettings = new Map();
let trialCueSettings = new Map();
function saveGeneralSettings() {

  const noOfSessions = document.getElementById("sessions").value;
  generalSettings.set("noOfSessions", noOfSessions);

  const noOfTrials = document.getElementById("trials").value;
  generalSettings.set("noOfTrials", noOfTrials);

  const cueFormat = document.getElementById("cueFormat").value;
  generalSettings.set("cueFormat", cueFormat);

  const arenaScale = document.getElementById("arenaScale").value;
  generalSettings.set("arenaScale", arenaScale);

  const playerSpeed = document.getElementById("playerSpeed").value;
  generalSettings.set("playerSpeed", playerSpeed);

  const retardFactor = document.getElementById("retardFactor").value;
  generalSettings.set("retardFactor", retardFactor);

  const fogDistance = document.getElementById("fogDistance").value;
  generalSettings.set("fogDistance", fogDistance);

  const fogDensity = document.getElementById("fogDensity").value;
  generalSettings.set("fogDensity", fogDensity);

  console.log(generalSettings);
}


function loadGeneralSettings() {
  document.getElementById("sessions").value = generalSettings.get("noOfSessions");
  document.getElementById("trials").value = generalSettings.get("noOfTrials");
  document.getElementById("cueFormat").value = generalSettings.get("cueFormat");
  document.getElementById("arenaScale").value = generalSettings.get("arenaScale");
  document.getElementById("playerSpeed").value = generalSettings.get("playerSpeed");
  document.getElementById("retardFactor").value = generalSettings.get("retardFactor");
  document.getElementById("fogDistance").value = generalSettings.get("fogDistance");
  document.getElementById("fogDensity").value = generalSettings.get("fogDensity");
  console.log(generalSettings);
}


function loadTrialWiseSettings() {
  let trialWiseSettings = trialSettings.get("".concat(document.getElementById("session").value, "-", document.getElementById("trial").value));
  document.getElementById("session").value = trialWiseSettings.get("sessionNumber");
  document.getElementById("trial").value = trialWiseSettings.get("trialNumber");
  document.getElementById("probe").checked = trialWiseSettings.get("isProbe");
  document.getElementById("startX").value = trialWiseSettings.get("startX");
  document.getElementById("startY").value = trialWiseSettings.get("startY");
  document.getElementById("endX").value = trialWiseSettings.get("endX");
  document.getElementById("endY").value = trialWiseSettings.get("endY");
  document.getElementById("endX1").value = trialWiseSettings.get("endX1");
  document.getElementById("endY1").value = trialWiseSettings.get("endY1");
  document.getElementById("endShapeRect").checked = (trialWiseSettings.get("endShape") === "rect");
  document.getElementById("endShapeEllipse").checked = (trialWiseSettings.get("endShape") === "ellipse");
}


function saveTrialWiseSettings() {
  trialSettings.set("".concat(document.getElementById("session").value, "-", document.getElementById("trial").value), new Map([
      ["sessionNumber", document.getElementById("session").value],
      ["trialNumber", document.getElementById("trial").value],
      ["isProbe", document.getElementById("probe").checked],
      ["startX", document.getElementById("startX").value],
      ["startY", document.getElementById("startY").value],
      ["endX", document.getElementById("endX").value],
      ["endY", document.getElementById("endY").value],
      ["endX1", document.getElementById("endX1").value],
      ["endY1", document.getElementById("endY1").value],
      ["endShape", document.getElementById("endShapeRect").checked ? "rect" : "ellipse"],
    ]
    )
  );
}


function loadCueSettings() {
  let cueSettings = trialCueSettings.get("".concat(document.getElementById("session").value, "-", document.getElementById("trial").value));
  document.getElementById("cue").value = cueSettings.get("cuesNumber");
  document.getElementById("cueX").value = cueSettings.get("cueX");
  document.getElementById("cueY").value = cueSettings.get("cueY");
  document.getElementById("cueZ").value = cueSettings.get("cueZ");
  document.getElementById("cueName").value = cueSettings.get("cueName");
}


function saveCueSettings() {
  const cueSettings = new Map([
    ["cuesNumber", document.getElementById("cue").value],
    ["cueX", document.getElementById("cueX").value],
    ["cueY", document.getElementById("cueY").value],
    ["cueZ", document.getElementById("cueZ").value],
    ["cueName", document.getElementById("cueName").value],
  ]);
  trialCueSettings.set("".concat(document.getElementById("session").value, "-", document.getElementById("trial").value), cueSettings);
}



function changeForm(content) {
  var formDiv = document.getElementById("form");
  if (content === "General Settings") {
    formDiv.innerHTML = document.getElementById("GeneralSettings").innerHTML;
    loadGeneralSettings();
  } else if (content === "Trial Settings") {
    saveGeneralSettings();
    formDiv.innerHTML = document.getElementById("TrialSettings").innerHTML;
  }
}

changeForm("General Settings");
