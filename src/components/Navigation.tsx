import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Icon name="Code" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              CodeAcademy
            </span>
          </Link>

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Главная
            </Link>
            <Link
              to="/courses"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Курсы
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              О нас
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Контакты
            </Link>
          </div>

          {/* CTA кнопка */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
              Начать обучение
            </Button>
          </div>

          {/* Мобильное меню кнопка */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link
                to="/courses"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Курсы
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                О нас
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
              <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 w-full">
                Начать обучение
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
