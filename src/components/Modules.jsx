import Card from './Card'; // Import the Card component
import SidebarWithContentSeparator from './sidebar';
import '../styles/Modules.css'

// Docs {@link https://tailwindcss.com/docs/text-color}

export function Modules() {
  const moduleItems = [
    {
      name: "Create a Budget",
      progress: [true, true, true, true, true],
      svgurl: "https://www.svgrepo.com/show/524750/money-bag.svg",
    },
    {
      name: "Pay rent/Morgage",
      progress: [true, true, true, true, true],
      svgurl: "https://www.svgrepo.com/show/261338/bank-transfer.svg",
    },
    {
      name: "Buy food/groceries",
      progress: [true, true, true, true, false],
      svgurl: "https://www.svgrepo.com/show/3868/groceries.svg",
    },
    {
      name: "Pay Essential Items",
      progress: [true, true, true, true, false],
      svgurl: "https://www.svgrepo.com/show/524750/money-bag.svg",
    },
    {
      name: "Pay income earning expenses",
      progress: [true, true, true, true, false],
      svgurl: "https://www.svgrepo.com/show/234152/tax.svg",
    },
    {
      name: "Pay Health Care",
      progress: [false, false, false, false, true],
      svgurl: "https://www.svgrepo.com/show/429873/health-care-love.svg",
    },
    {
      name: "Make minimum payments on all debts and loans",
      progress: [false, true, false, false, true],
      svgurl: "https://www.svgrepo.com/show/261338/bank-transfer.svg",
    },
  ];
  
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-black-500">
          {/* First element (1/5 of the screen) */}
          <SidebarWithContentSeparator className="flex flex-col"/>
      </div>
      <div className="col-span-10 bg-black-500 gap-4 px-4 py-4">
        <div class="flex flex-wrap gap-4 py-4 justify-center bg-gray-800 rounded-lg">
          <aside><h3>Level One</h3></aside>
            {moduleItems.map((module, index) => (
              <div>
                <Card key={index} cardName={module.name} progressList={module.progress} svgUrl={module.svgurl} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}


export default Modules
