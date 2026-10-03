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
    <div className="mt-20">
      <Card >
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2">
           <StarIcon className="size-9 text-emerald-300" />
           <h3 className="font-serif text-3xl">Readings</h3>
          </div>
          <p className="text-sm text-white/60 mt-2">Explore what I use to gain simple but important knowledge about development.</p>
        </div>
            <div className="w-40 mx-auto mt-8">
              <Image src={siteImage} alt="Site cover" />
            </div>
      </Card>
      <Card>
        <div>
          <StarIcon />
          <h3>Toolbox</h3>
          <p>Explore the technologies and tools i use to develop digital experiences.</p>
        </div>
        <div>
          {toolboxItems.map(item => (
            <div key={item.title}>
              <TechIcon component={item.iconType} />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <div>
          <StarIcon />
          <h3>Personal Space Beyond the Code</h3>
          <p>Explore my hobbies and other activities beyond the digital space.</p>
        </div>
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
