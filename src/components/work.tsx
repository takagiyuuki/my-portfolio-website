import { Animations } from '@/components/animations';
import { Artwork } from '@/components/artwork';
import { Services } from '@/components/services';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CG } from './cg';

export function Work() {
  return (
    <div className='m-auto max-w-full py-6'>
      <Tabs defaultValue='services' className='m-auto max-w-full py-4'>
        <TabsList>
          <TabsTrigger className='px-4 font-mono' value='services'>
            Services
          </TabsTrigger>
          <TabsTrigger className='px-4 font-mono' value='artwork'>
            Artwork
          </TabsTrigger>
          <TabsTrigger className='px-4 font-mono' value='3dcg'>
            3DCG
          </TabsTrigger>
          <TabsTrigger className='px-4 font-mono' value='animations'>
            Animations
          </TabsTrigger>
        </TabsList>
        <TabsContent value='services'>
          <Services />
        </TabsContent>
        <TabsContent value='artwork'>
          <Artwork />
        </TabsContent>
        <TabsContent value='3dcg'>
          <CG />
        </TabsContent>
        <TabsContent value='animations'>
          <Animations />
        </TabsContent>
      </Tabs>
    </div>
  );
}
