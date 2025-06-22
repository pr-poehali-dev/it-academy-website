import Navigation from "@/components/Navigation";
import CoursesSection from "@/components/CoursesSection";
import CTASection from "@/components/CTASection";

const CoursesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Наши{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Курсы
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите программу обучения, которая подходит именно вам. От основ
              до продвинутых техник программирования.
            </p>
          </div>
        </div>
        <CoursesSection />
        <CTASection />
      </div>
    </div>
  );
};

export default CoursesPage;
