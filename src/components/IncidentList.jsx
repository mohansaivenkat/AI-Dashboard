import React from 'react';
import IncidentItem from './IncidentItem';

const IncidentList = ({ incidents, selectedSeverity, sortOrder }) => {
  // Filter incidents by severity
  const filteredIncidents = selectedSeverity === 'All'
    ? incidents
    : incidents.filter(incident => incident.severity === selectedSeverity);
  
  // Sort incidents by date
  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at);
    const dateB = new Date(b.reported_at);
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="space-y-4 animate-fadeIn">
      {sortedIncidents.length > 0 ? (
        sortedIncidents.map((incident) => (
          <IncidentItem key={incident.id} incident={incident} />
        ))
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
          <p className="text-gray-500 dark:text-gray-400">No incidents found matching the selected criteria.</p>
        </div>
      )}
    </div>
  );
};

export default IncidentList;