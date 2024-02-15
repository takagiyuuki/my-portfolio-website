import { Animations } from './Animations';
import { Artwork } from './Artwork';
import { CG } from './Sculpture';
import { Services } from './Services';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
