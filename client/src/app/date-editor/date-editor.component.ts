import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-date-editor",
  templateUrl: "./date-editor.component.html",
  styleUrls: ["./date-editor.component.scss"]
})
export class DateEditorComponent implements OnChanges {
  @Input() date: number;
  @Output() changeDate = new EventEmitter();

  dateForm;

  constructor(private datePipe: DatePipe) {}

  onChange() {
    this.changeDate.emit(this.dateForm.value);
  }

  ngOnChanges() {
    let date = "";
    let time = "";

    if (this.date !== undefined) {
      const transformedDate = this.datePipe
        .transform(new Date(this.date * 1000), "yyyy-MM-dd HH:mm")
        .split(" ");
      date = transformedDate[0];
      time = transformedDate[1];
    }

    if (!this.dateForm) {
      this.dateForm = new FormGroup({
        date: new FormControl(date),
        time: new FormControl(time)
      });
    } else {
      this.dateForm.setValue({
        date,
        time
      });
    }
  }
}
