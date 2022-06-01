function Solvency(){
          var income = Number(document.getElementById("income").value);
          var duty = Number(document.getElementById("duty").value);
          var solvency = income * 0.8 - duty;

          document.getElementById("solvency").innerHTML = solvency;
          }
