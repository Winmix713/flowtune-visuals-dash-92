
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AlertTriangle, CircleCheck, Info } from "lucide-react";

interface StrategyCardProps {
  number: number;
  icon: "info" | "warning" | "success";
  name: string;
  role: string;
  quote: string;
  className?: string;
  avatar: string;
}

const ICONS = {
  info: <Info className="h-5 w-5 text-blue-500 dark:text-blue-400" />,
  warning: <AlertTriangle className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />,
  success: <CircleCheck className="h-5 w-5 text-green-500 dark:text-green-400" />,
};

const GRADIENTS = {
  info: "from-blue-500/20 to-transparent dark:from-blue-500/30",
  warning: "from-yellow-500/20 to-transparent dark:from-yellow-500/30",
  success: "from-green-500/20 to-transparent dark:from-green-500/30",
};

const BORDERS = {
  info: "border-blue-500/20 dark:border-blue-400/20",
  warning: "border-yellow-500/20 dark:border-yellow-400/20",
  success: "border-green-500/20 dark:border-green-400/20",
};

const GLOWS = {
  info: "dark:shadow-[0_0_15px_rgba(59,130,246,0.15)]",
  warning: "dark:shadow-[0_0_15px_rgba(251,191,36,0.15)]",
  success: "dark:shadow-[0_0_15px_rgba(52,211,153,0.15)]",
};

export function StrategyCard({
  number,
  icon,
  name,
  role,
  quote,
  className,
  avatar,
}: StrategyCardProps) {
  const firstSentence = quote.split('.')[0].trim() + '.';
  const remainingQuote = quote.split('.').slice(1).join('.').trim();

  return (
    <Card
      className={cn(
        "relative overflow-hidden border glass-card transition-all hover:shadow-xl",
        BORDERS[icon],
        GLOWS[icon],
        className
      )}
    >
      {/* Decorative corner */}
      <div
        className={cn(
          "absolute top-0 left-0 w-24 h-24 rounded-br-[100px] bg-gradient-to-br",
          GRADIENTS[icon]
        )}
      >
        <div className="absolute top-4 left-4">{ICONS[icon]}</div>
      </div>

      {/* Strategy number badge */}
      <div className="flex justify-end mb-8 p-6 pb-0">
        <span className="px-4 py-1 rounded-full bg-background/50 backdrop-blur-sm border border-border text-sm font-medium">
          Strategy #{number}
        </span>
      </div>

      {/* Avatar + Name */}
      <div className="flex items-center gap-4 mb-4 px-6">
        <img
          src={avatar}
          alt={name}
          className="h-12 w-12 rounded-full object-cover border"
        />
        <div>
          <h3 className="font-semibold text-base">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-[1.05rem] leading-relaxed text-muted-foreground p-6 pt-0">
        <span className="">{firstSentence} </span>
        {remainingQuote && (
          <span className="text-foreground font-medium">{remainingQuote}</span>
        )}
      </blockquote>
    </Card>
  );
}
