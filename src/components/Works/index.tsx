import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Animations } from '@/components/Works/Animations';
import { Artwork } from '@/components/Works/Artwork';
import { CG } from '@/components/Works/Sculpture';
import { Services } from '@/components/Works/Services';

export function Work() {
  return (
    <div className='m-auto max-w-full py-6'>
      <Tabs
        defaultValue='services'
        className='m-auto max-w-full py-4'
      >
        <TabsList className='[&>TabsTrigger]:px-4 [&>TabsTrigger]:font-mono [&>TabsTrigger]:font-black'>
          <TabsTrigger value='services'>Services</TabsTrigger>
          <TabsTrigger value='artwork'>Artwork</TabsTrigger>
          <TabsTrigger value='3dcg'>3DCG</TabsTrigger>
          <TabsTrigger value='animations'>Animations</TabsTrigger>
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
