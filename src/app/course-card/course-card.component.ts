import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { Course } from "../model/course";
// import { CourseImageComponent } from "../course-image/course-image.component";
import { CoursesService } from "../services/courses.service";
// import { COURSES_SERVICE } from "../app.component";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    console.log(
      "coursesService from cours-card component: ",
      this.coursesService
    );
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }
}
