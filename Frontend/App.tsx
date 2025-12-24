import React, { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Card from './components/Card';
import CarouselWidget from './components/widgets/CarouselWidget';
import TextWidget from './components/widgets/TextWidget';
import SliderWidget from './components/widgets/SliderWidget';
import StaticWidget from './components/widgets/StaticWidget';
import ActionButtonsWidget from './components/widgets/ActionButtonsWidget';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-neutral-50 font-sans text-gray-600">
      
      {/* Sidebar - Fixed/Drawer */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            
            {/* 
              Desktop Grid Layout (4 columns) 
              Row 1: C1 (span 2), C2 (span 1), C3 (span 1)
              Row 2: C4 (span 2), C5 (span 1), C6 (span 1)
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Container 1: Image Carousel */}
              <div className="col-span-1 md:col-span-2 lg:col-span-2">
                <Card className="h-full">
                  <CarouselWidget />
                </Card>
              </div>

              {/* Container 2: Text Panel */}
              <div className="col-span-1">
                <Card bgColor="bg-white" className="h-full">
                  <TextWidget />
                </Card>
              </div>

              {/* Container 3: Activity */}
              <div className="col-span-1">
                <Card title="Activity" className="h-full">
                  <div className="flex flex-col h-full justify-between">
                    <SliderWidget 
                      items={[
                          { title: 'Daily Goals', subtitle: '80% Completed', bg: 'bg-sky-100' },
                          { title: 'Weekly Focus', subtitle: 'Design System', bg: 'bg-teal-50' },
                          { title: 'Wellness', subtitle: '30 mins Meditation', bg: 'bg-emerald-100' },
                      ]} 
                      variant="blue"
                    />
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Track your daily activities and monitor your progress throughout the week. Stay consistent with your goals.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Container 4: Static Content */}
              <div className="col-span-1 md:col-span-2 lg:col-span-2">
                <Card className="h-full">
                  <StaticWidget />
                </Card>
              </div>

              {/* Container 5: Buttons A/B */}
              <div className="col-span-1">
                <Card title="Controls" className="h-full">
                  <ActionButtonsWidget />
                </Card>
              </div>

               {/* Container 6: Slider Variant */}
               <div className="col-span-1">
                <Card title="Insights" className="h-full">
                  <SliderWidget 
                     items={[
                        { title: 'Revenue', subtitle: '+12.5% vs last week', bg: 'bg-teal-100' },
                        { title: 'Users', subtitle: '1.2k new signups', bg: 'bg-cyan-100' },
                        { title: 'Retention', subtitle: '98% active users', bg: 'bg-emerald-50' },
                    ]}
                    variant="teal"
                  />
                </Card>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;