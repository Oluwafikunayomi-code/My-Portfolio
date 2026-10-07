import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import siteImage from "@/assets/images/educativeImage.jpg";
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
    emoji: '🧑‍💻',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Music',
    emoji: '🎧',
    left: '355',
    top: '40%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '28%',
    top: '35%',
  },
  {
    title: 'Fitness',
    emoji: '🏋️',
    left: '60%',
    top: '55%',
  },
  {
    title: 'Traveling',
    emoji: '✈️',
    left: '5%',
    top: '65%',
  },
]

export const AboutSection = () => {
  return <div className="py-20 lg:py-28">
    <div className="container">
    <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspires me."
    />
    <div className="mt-20 flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
        <Card className="h-[320px] md:col-span-2 lg:col-span-1">
          <CardHeader title="My Readings" description="Explore what I use to gain simple  but important knowledge about development." />
           <div className="w-40 mx-auto mt-2 md:-mt-3">
              <Image className="h-[320px]" src=  {siteImage} alt="Site cover" />
            </div>
        </Card>
        <Card className="h-[320px] md:col-span-3 lg:col-span-2">
         <CardHeader title="Toolbox" description="Explore  the technologies and tools i use to develop  digital experiences." className="" />
          <ToolboxItems items={toolboxItems}  className="" />
          <ToolboxItems items={toolboxItems}  className="mt-6"   itemsWrapperClassName="-translate-x-1/2" />
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
        <CardHeader title="My Personal Space Beyond the Code" description="Explore my hobbies and other activities beyond the digital space." className="px-6 py-6" />
        <div className="relative flex-1" >
          {hobbies.map(hobby => (
            <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" 
            style={{
              left: hobby.left,
              top: hobby.top
            }}
            >
              <span className="font-medium text-gay-950">{hobby.title}</span>
              <span>{hobby.emoji}</span>
            </div>
          ))}
        </div>
        </Card>
        <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1">
        <Image src={mapImage} alt="map" 
        className="h-full w-full object-cover object-left-top" />
        </Card>
      </div>
    </div>
  </div>
  </div>
};
