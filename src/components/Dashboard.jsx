import React from 'react';
import FilterControls from './FilterControls';
import IncidentList from './IncidentList';
import ReportIncidentForm from './ReportIncidentForm';


const Dashboard = ({
    incidents,
    addIncident,
    selectedSeverity,
    setSelectedSeverity,
    sortOrder,
    setSortOrder
}) => {
    return (
        <main className="container mx-auto px-4 py-8 mb-10">


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <FilterControls
                        selectedSeverity={selectedSeverity}
                        setSelectedSeverity={setSelectedSeverity}
                        sortOrder={sortOrder}
                        setSortOrder={setSortOrder}
                    />
                    <IncidentList
                        incidents={incidents}
                        selectedSeverity={selectedSeverity}
                        sortOrder={sortOrder}
                    />
                </div>

                <div className="lg:col-span-1">
                    <ReportIncidentForm addIncident={addIncident} />

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mt-6 mb-30">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Dashboard Stats</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

                            <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-lg text-center">
                                <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
                                    {incidents.length}
                                </div>
                                <div className="text-sm text-indigo-600 dark:text-indigo-400">All</div>
                            </div>

                            <div className="bg-red-100 dark:bg-red-900 p-3 rounded-lg text-center">
                                <div className="text-2xl font-bold text-red-700 dark:text-red-300">
                                    {incidents.filter(i => i.severity === 'High').length}
                                </div>
                                <div className="text-sm text-red-600 dark:text-red-400">High</div>
                            </div>

                            <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg text-center">
                                <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">
                                    {incidents.filter(i => i.severity === 'Medium').length}
                                </div>
                                <div className="text-sm text-yellow-600 dark:text-yellow-400">Med</div>
                            </div>

                            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg text-center">
                                <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                                    {incidents.filter(i => i.severity === 'Low').length}
                                </div>
                                <div className="text-sm text-green-600 dark:text-green-400">Low</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;