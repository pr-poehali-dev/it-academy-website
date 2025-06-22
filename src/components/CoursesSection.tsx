import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const courses = [
    {
      title: "HTML",
      description:
        "Основы веб-разработки. Изучите структуру веб-страниц и семантическую разметку.",
      price: "4,990",
      duration: "2 недели",
      level: "Начальный",
      icon: "FileText",
      gradient: "bg-gradient-to-r from-orange-400 to-red-500",
    },
    {
      title: "CSS",
      description:
        "Стилизация веб-страниц. Flexbox, Grid, анимации и адаптивная верстка.",
      price: "6,990",
      duration: "3 недели",
      level: "Начальный",
      icon: "Palette",
      gradient: "bg-gradient-to-r from-blue-400 to-cyan-500",
    },
    {
      title: "JavaScript",
      description:
        "Программирование для веба. DOM, события, асинхронность и современный ES6+.",
      price: "12,990",
      duration: "6 недель",
      level: "Средний",
      icon: "Zap",
      gradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      title: "C++",
      description:
        "Системное программирование. ООП, алгоритмы, структуры данных.",
      price: "15,990",
      duration: "8 недель",
      level: "Продвинутый",
      icon: "Code",
      gradient: "bg-gradient-to-r from-purple-400 to-pink-500",
    },
    {
      title: "Frontend",
      description:
        "Полный курс фронтенд-разработки. React, TypeScript, современные инструменты.",
      price: "24,990",
      duration: "12 недель",
      level: "Средний",
      icon: "Monitor",
      gradient: "bg-gradient-to-r from-green-400 to-blue-500",
    },
    {
      title: "Backend",
      description:
        "Серверная разработка. Node.js, базы данных, API, развертывание.",
      price: "27,990",
      duration: "14 недель",
      level: "Продвинутый",
      icon: "Server",
      gradient: "bg-gradient-to-r from-indigo-400 to-purple-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Популярные курсы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите направление и начните свой путь в IT уже сегодня
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
