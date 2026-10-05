import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import siteImage from "@/assets/images/siteImage.jpg";
import Image from "next/image";
import JavaScriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import NextIcon from '@/assets/icons/next.svg';
import NodeIcon from '@/assets/icons/node.svg';
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'Html5',
    iconType: HTMLIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
  {
    title: 'Next',
    iconType: NextIcon,
  },
  {
    title: 'Node',
    iconType: NodeIcon,
  },
  {
    title: 'Css3',
    iconType: CssIcon,
  },
]

const hobbies = [
  {
    title: 'Web surfing',
    emoji: '🧑‍💻'
  },
  {
    title: 'Reading',
    emoji: '📚'
  },
  {
    title: 'Gaming',
    emoji: '🎮'
  },
  {
    title: 'Music',
    emoji: '🎧'
  },
  {
    title: 'Fitness',
    emoji: '🏋️'
  },
  {
    title: 'Traveling',
    emoji: '✈️'
  },
]

export const AboutSection = () => {
  return <div className="py-20">
    <div className="container">
    <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspires me."
    />
    <div className="mt-20 flex flex-col gap-6">
      <Card>
        <CardHeader title="Readings" description="Explore what I use to gain simple but important knowledge about development." />
          <div className="w-40 mx-auto mt-8">
            <Image className="h-[320px] -mb-20" src={siteImage} alt="Site cover" />
          </div>
      </Card>
      <Card className="h-[320px] p-0">
        <CardHeader title="Toolbox" description="Explore the technologies and tools i use to develop digital experiences." className="px-6 pt-6" />
        <ToolboxItems items={toolboxItems} className="mt-6" />
        <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="-translate-x-1/2" />
      </Card>
      <Card>
        <CardHeader title="My Personal Space Beyond the Code" description="Explore my hobbies and other activities beyond the digital space." />
        <div>
          {hobbies.map(hobby => (
            <div key={hobby.title}>
              <span>{hobby.title}</span>
              <span>{hobby.emoji}</span>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <Image src={mapImage} alt="map" />
      </Card>
    </div>
  </div>
  </div>
};
