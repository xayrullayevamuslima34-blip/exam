import {Module} from "@nestjs/common";
import {CourseAdminController} from "./controllers/course/course.admin.controller";
import {CoursePublicController} from "./controllers/course/course.public.controller";
import {CourseCategoriesAdminController} from "./controllers/course-categories/course-categories.admin.controller";
import {CourseCategoriesPublicController} from "./controllers/course-categories/course-categories.public.controller";
import {CourseLessonsAdminController} from "./controllers/course-lessons/course-lessons.admin.controller";
import {CourseLessonsPublicController} from "./controllers/course-lessons/course-lessons.public.controller";
import {CourseLikesAdminController} from "./controllers/course-likes/course-likes.admin.controller";
import {CourseLikesPublicController} from "./controllers/course-likes/course-likes.public.controller";
import {CourseReviewsAdminController} from "./controllers/course-reviews/course-reviews.admin.controller";
import {CourseReviewsPublicController} from "./controllers/course-reviews/course-reviews.public.controller";
import {CourseSectionsAdminController} from "./controllers/course-sections/course-sections.admin.controller";
import {CourseUserLessonsAdminController} from "./controllers/course-user-lessons/course-user-lessons.admin.controller";
import {
    CourseUserLessonsPublicController
} from "./controllers/course-user-lessons/course-user-lessons.public.controller";
import {PurchasedCourseAdminController} from "./controllers/purchased-courses/purchased-course.admin.controller";
import {PurchasedCoursePublicController} from "./controllers/purchased-courses/purchased-course.public.controller";
import {CourseAdminService} from "./services/course/course.admin.service";
import {CoursePublicService} from "./services/course/course.public.service";
import {CourseCategoriesAdminService} from "./services/course-categories/course-categories.admin.service";
import {CourseCategoriesPublicService} from "./services/course-categories/course-categories.public.service";
import {CourseLessonsAdminService} from "./services/course-lessons/course-lessons.admin.service";
import {CourseLessonsPublicService} from "./services/course-lessons/course-lessons.public.service";
import {CourseLikesAdminService} from "./services/course-likes/course-likes.admin.service";
import {CourseLikesPublicService} from "./services/course-likes/course-likes.public.service";
import {CourseReviewsAdminService} from "./services/course-reviews/course-reviews.admin.service";
import {CourseReviewsPublicService} from "./services/course-reviews/course-reviews.public.service";
import {CourseSectionsAdminService} from "./services/course-sections/course-sections.admin.service";
import {CourseSectionsPublicService} from "./services/course-sections/course-sections.public.service";
import {CourseUserLessonsAdminService} from "./services/course-user-lessons/course-user-lessons.admin.service";
import {CourseUserLessonsPublicService} from "./services/course-user-lessons/course-user-lessons.public.service";
import {PurchasedCoursesAdminService} from "./services/purchased-courses/purchased-courses.admin.service";
import {PurchasedCoursesPublicService} from "./services/purchased-courses/purchased-courses.public.service";
import {CourseSectionsPublicController} from "./controllers/course-sections/course-sections.public.controller";

@Module({
    controllers: [CourseAdminController, CoursePublicController,
                  CourseCategoriesAdminController, CourseCategoriesPublicController,
                  CourseLessonsAdminController, CourseLessonsPublicController,
                  CourseLikesAdminController, CourseLikesPublicController,
                  CourseReviewsAdminController, CourseReviewsPublicController,
                  CourseSectionsAdminController, CourseSectionsPublicController,
                  CourseUserLessonsAdminController, CourseUserLessonsPublicController,
                  PurchasedCourseAdminController, PurchasedCoursePublicController],

    providers: [CourseAdminService, CoursePublicService,
                CourseCategoriesAdminService, CourseCategoriesPublicService,
                CourseLessonsAdminService, CourseLessonsPublicService,
                CourseLikesAdminService, CourseLikesPublicService,
                CourseReviewsAdminService, CourseReviewsPublicService,
                CourseSectionsAdminService, CourseSectionsPublicService,
                CourseUserLessonsAdminService, CourseUserLessonsPublicService,
                PurchasedCoursesAdminService, PurchasedCoursesPublicService]

})

export class CourseModule{}