export default function About() {
  return (
    <div>
      <p className='text-xl font-semibold'>About page</p>
      <div className='group m-10 border p-10 hover:bg-gray-100'>
        <p className='font-black group-hover:text-red-900'>New Project</p>
        <p className='font-black group-hover:text-blue-900'>Next Project</p>
      </div>
    </div>
  );
}
