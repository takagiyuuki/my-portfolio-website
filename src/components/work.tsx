import { TabArtwork } from '@/components/tabArtwork';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function Work() {
  return (
    <div>
      <Tabs defaultValue='services' className='m-auto max-w-max py-4'>
        <TabsList>
          <TabsTrigger className='px-4 font-mono text-2xl' value='services'>
            Services
          </TabsTrigger>
          <Separator orientation='vertical' />
          <TabsTrigger className='px-4 font-mono text-2xl' value='artwork'>
            Artwork
          </TabsTrigger>
          <Separator orientation='vertical' />
          <TabsTrigger className='px-4 font-mono text-2xl' value='3dcg'>
            3DCG
          </TabsTrigger>
          <Separator orientation='vertical' />
          <TabsTrigger className='px-4 font-mono text-2xl' value='animations'>
            Animations
          </TabsTrigger>
        </TabsList>
        <TabsContent value='services'>
          <Separator />
          Make changes to your account here.
        </TabsContent>
        <TabsContent value='artwork'>
          <Separator />
          <TabArtwork />
        </TabsContent>
        <TabsContent value='3dcg'>
          <Separator />
          Change your password here.
        </TabsContent>
        <TabsContent value='animations'>
          <Separator />
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  );
}
