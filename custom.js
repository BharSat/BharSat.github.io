let generalSettings = new Map();
let trialSettings = new Map();
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
  let trialWiseSettings = trialSettings.get(string.concat(document.getElementById("session").value, "-", document.getElementById("trial").value));
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
  trialSettings.set(string.concat(document.getElementById("session").value, "-", document.getElementById("trial").value), new Map([
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


function changeForm(content) {
  var formDiv = document.getElementById("form");
  if (content === "General Settings") {
    formDiv.innerHTML = `
      <h3>${content}</h3>
      <form>
        <div class="form-group">
          <label for="sessions">No of Sessions:</label>
          <input type="number" class="form-control" id="sessions">
        </div>
        <div class="form-group">
          <label for="trials">No of Trials:</label>
          <input type="number" class="form-control" id="trials">
        </div>
        <div class="form-group">
          <label for="cueFormat">Cue Format:</label>
          <input type="text" class="form-control" id="cueFormat">
        </div>
        <div class="form-group">
          <label for="arenaScale">Arena Scale:</label>
          <input type="number" class="form-control" id="arenaScale">
        </div>
        <div class="form-group">
          <label for="playerSpeed">Player Speed:</label>
          <input type="number" class="form-control" id="playerSpeed">
        </div>
        <div class="form-group">
          <label for="retardFactor">Retard Factor:</label>
          <input type="number" class="form-control" id="retardFactor">
        </div>
        <div class="form-group">
          <label for="fogDistance">Fog Distance:</label>
          <input type="number" class="form-control" id="fogDistance">
        </div>
        <div class="form-group">
          <label for="fogDensity">Fog Density:</label>
          <input type="number" class="form-control" id="fogDensity">
        </div>
      </form>
    `;
    loadGeneralSettings();
  } else if (content === "Trial Settings") {
    saveGeneralSettings();
    formDiv.innerHTML = `
      <h3>${content}</h3>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="sessionTrial">Session/Trial:</label>
            <div class="row">
              <div class="col-md-6">
                <input type="number" class="form-control" id="session" placeholder="Session">
              </div>
              <div class="col-md-6">
                <input type="number" class="form-control" id="trial" placeholder="Trial">
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="probe">Probe:</label>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="probe">
              <label class="form-check-label" for="probe">Enable probe</label>
            </div>
          </div>
          <div class="form-group">
            <label for="start">Start:</label>
            <div class="row">
              <div class="col-md-6">
                <input type="number" class="form-control" id="startX" placeholder="X">
              </div>
              <div class="col-md-6">
                <input type="number" class="form-control" id="startY" placeholder="Y">
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="end">End:</label>
            <div class="row">
              <div class="col-md-6">
                <input type="number" class="form-control" id="endX" placeholder="X">
              </div>
              <div class="col-md-6">
                <input type="number" class="form-control" id="endY" placeholder="Y">
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <input type="number" class="form-control" id="endX1" placeholder="X1">
              </div>
              <div class="col-md-6">
                <input type="number" class="form-control" id="endY1" placeholder="Y1">
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="endShape">End Shape:</label>
            <div class="form-check">
              <input type="radio" class="form-check-input" id="endShapeRect" name="endShape" value="rect">
              <label class="form-check-label" for="endShapeRect">Rect</label>
            </div>
            <div class="form-check">
              <input type="radio" class="form-check-input" id="endShapeEllipse" name="endShape" value="ellipse">
              <label class="form-check-label" for="endShapeEllipse">Ellipse</label>
            </div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary" onclick="loadTrialWiseSettings()">Load</button>
            <button type="submit" class="btn btn-primary" onclick="saveTrialWiseSettings()">Update</button>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="cues">Cues:</label>
            <input type="number" class="form-control" id="cues">
          </div>
          <div class="form-group">
            <label for="cueInfo">Cue Info:</label>
            <div class="row">
              <div class="col-md-6">
                <input type="number" class="form-control" id="cueX" placeholder="X">
              </div>
              <div class="col-md-6">
                <input type="number" class="form-control" id="cueY" placeholder="Y">
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <input type="number" class="form-control" id="cueZ" placeholder="Z">
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" id="cueName" placeholder="Name">
              </div>
            </div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Update Cue</button>
          </div>
        </div>
      </div>
    `;
  }
}

