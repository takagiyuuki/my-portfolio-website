import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { YouTubeEmbed } from '@next/third-parties/google';

const Services = () => {
  return (
    <div className='grid grid-cols-2 gap-1 py-4'>
      <LinkCard />
      <LinkCard />
      <LinkCard />
      <object
        type='image/svg+xml'
        data='https://gh-card.dev/repos/takagiyuuki/portfolio.svg?link_target=_blank'
      ></object>
      <object
        type='image/svg+xml'
        data='https://gh-card.dev/repos/takagiyuuki/portfolio.svg?link_target=_blank'
      ></object>
      <object
        type='image/svg+xml'
        data='https://gh-card.dev/repos/takagiyuuki/portfolio.svg?link_target=_blank'
      ></object>
    </div>
  );
};

const LinkCard = () => {
  return (
    <div className='group font-mono'>
      <Card className='transition duration-700 hover:border group-hover:scale-95'>
        <CardContent>
          <YouTubeEmbed videoid='M1Omy-1vPCs' />
        </CardContent>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardFooter>
          <p>YUKI TAKAGI</p>
        </CardFooter>
      </Card>
    </div>
  );
};

// const Iflamely = () => {
//   return (
//     <div>
//       <div class='iframely-embed'>
//         <div
//           class='iframely-responsive'
//           style={padding-bottom: 50%; padding-top: 120px;}
//         >
//           <a
//             href='https://github.com/takagiyuuki/portfolio'
//             data-iframely-url='//iframely.net/BfdyOPk'
//           ></a>
//         </div>
//       </div>
//       <script async src='//iframely.net/embed.js'></script>
//     </div>
//   );
// };

export { Services };
