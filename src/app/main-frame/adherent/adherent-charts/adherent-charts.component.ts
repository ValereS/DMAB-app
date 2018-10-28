import { Component, OnInit, Input } from "@angular/core";
import { Adherent } from "../../../shared/dto/adherent";
import { LoggerService } from "../../../shared/logger/logger.service";
import { Gender } from "../../../shared/enum/gender.enum";
import { ChartService } from "../../../core/chart/service/chart.service";

@Component({
  selector: "dmab-adherent-charts",
  templateUrl: "./adherent-charts.component.html",
  styleUrls: ["./adherent-charts.component.scss"]
})
export class AdherentChartsComponent implements OnInit {
  @Input() adherents: Array<Adherent>;
  dataLoaded: boolean;
  dataChart: any;

  constructor(
    private chartService: ChartService,
    private logger: LoggerService
  ) {
    this.initChart();
  }

  ngOnInit() {
    if (this.adherents != null) {
      this.pickColorSet();
      this.populateChart();
    }
  }

  initChart() {
    this.dataChart = {
      labels: [
        "Homme", "Femme", "Non-binaire", "Autre"
      ],
      datasets: [
        {
          data: [],
          backgroundColor: [
            "red", "blue", "yellow", "brown"
          ]
        }
      ]
    };
  }

  pickColorSet() {
    this.dataChart.datasets[0].backgroundColor = this.chartService.colorSetAntic;
  }

  populateChart() {
    this.dataChart.datasets[0].data = this.populateGender(this.adherents);
  }

  populateGender(adherent: Array<Adherent>) {
    let HFNAb: number[];
    HFNAb = [0, 0, 0, 0];
    adherent.forEach(element => {
      switch (element.gender) {
        case Gender.homme:
        HFNAb[0] += 1;
          break;
        case Gender.femme:
        HFNAb[1] += 1;
          break;
        case Gender.nonBinaire:
        HFNAb[2] += 1;
          break;
        default:
        HFNAb[3] += 1;
      }
    });
    return HFNAb;
  }
}
