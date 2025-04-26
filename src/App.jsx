import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css';
import Footer from './components/Footer';

function App() {
  const [selectedSeverity, setSelectedSeverity] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');
  const [incidents, setIncidents] = useState([
    { 
      "id": 1,
      "title": "Biased Recommendation Algorithm",
      "description": "Algorithm consistently favored certain demographics in job recommendation listings, potentially reinforcing workplace inequalities. Initial analysis suggests training data contained historical biases that were amplified in the model's outputs.",
      "severity": "Medium",
      "reported_at": "2025-03-15T10:00:00Z" 
    },
    { 
      "id": 2,
      "title": "LLM Hallucination in Critical Info",
      "description": "LLM provided incorrect safety procedure information when queried about emergency protocols, presenting serious risk. The model confidently offered fabricated steps for handling hazardous materials that would have increased danger rather than mitigating it.",
      "severity": "High",
      "reported_at": "2025-04-01T14:30:00Z" 
    },
    { 
      "id": 3,
      "title": "Minor Data Leak via Chatbot",
      "description": "Chatbot inadvertently exposed non-sensitive user metadata through conversation patterns. While no personally identifiable information was revealed, usage patterns and preference data could be inferred from the bot's responses.",
      "severity": "Low",
      "reported_at": "2025-03-20T09:15:00Z" 
    },
    { 
      "id": 4,
      "title": "Sentiment Analysis Model Misclassification",
      "description": "The sentiment analysis system repeatedly misclassified neutral customer feedback as negative, leading to unwarranted escalation and resource allocation. Root cause linked to training data imbalance.",
      "severity": "Medium",
      "reported_at": "2025-04-10T11:45:00Z"
    },
    { 
      "id": 5,
      "title": "Facial Recognition Bias",
      "description": "Facial recognition system showed significantly higher false rejection rates for darker-skinned individuals during identity verification checks. Investigation pointed to insufficient diverse representation in training datasets.",
      "severity": "High",
      "reported_at": "2025-03-28T16:00:00Z"
    },
    
    
  ]);
  
  const addIncident = (newIncident) => {
    setIncidents(prev => [...prev, { ...newIncident, id: prev.length + 1 }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
      <Header />
      
      <Dashboard 
        incidents={incidents}
        addIncident={addIncident}
        selectedSeverity={selectedSeverity}
        setSelectedSeverity={setSelectedSeverity}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      
      <Footer />

    </div>
  );
}

export default App;