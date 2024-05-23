import CourseItem from "./CourseItem"

const Courses = ({ courses }) => {
    return (
        <>
            <div className="px-4 laptop:px-8">
                <div>
                    <div className="mt-8 text-lg font-medium tab:mt-12 tab:text-xl laptop:mt-16">
                        <span class="font-hi pt-[3px]">वीडियो श्रृंखलाएँ ({courses?.length})</span>
                    </div>
                    <div className="mt-1 h-[0.5px] w-full bg-gray-separator tab:mt-2"></div>
                </div>
            </div>

            {/* Course Item */}
            <div className="grid grid-cols-1 gap-x-4 tab:grid-cols-2 tab:gap-y-4 laptop:grid-cols-3 laptop:gap-x-8 laptop:px-4 desk:grid-cols-4">
                {courses.map((course, index) => <CourseItem key={course?.id} index={index + 1} course={course} />)}
            </div>

        </>
    )
}

export default Courses