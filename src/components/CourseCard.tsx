import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  level: string;
  icon: string;
  gradient: string;
}

const CourseCard = ({
  title,
  description,
  price,
  duration,
  level,
  icon,
  gradient,
}: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div
          className={`w-16 h-16 ${gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon name={icon as any} size={32} className="text-white" />
        </div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            {level}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pb-6">
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Icon name="Clock" size={16} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Users" size={16} />
            <span>Группа</span>
          </div>
        </div>

        <div className="text-2xl font-bold text-purple-600 mb-2">
          {price}
          <span className="text-sm font-normal text-gray-500 ml-1">руб</span>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
          <Icon name="ShoppingCart" size={16} className="mr-2" />
          Купить курс
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
