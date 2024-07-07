export const categoryData = [
    { value: 'quality a', label: 'Quality A' },
    { value: 'quality b', label: 'Quality B' },
    { value: 'quality c', label: 'Quality C' },
  ];
  
  export const priorityData = [
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' },
  ];
  
  export const departmentData = [
    { value: 'strategy', label: 'Strategy' },
    { value: 'finance', label: 'Finance' },
    { value: 'quality', label: 'Quality' },
    { value: 'maintenance', label: 'Maintenance' },
    { value: 'stores', label: 'Stores' },
    { value: 'hr', label: 'HR' },
  ];

  export const citiesData = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat',
    'Pune', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Patna',
    'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad'
  ];

  // options.js

export const reasonData = [
    { value: 'business', label: 'For Business' },
    { value: 'personal', label: 'For Personal' },
    { value: 'dealership', label: 'For Dealership' },
    { value: 'transport', label: 'For Transport' },
  ];
  
  export const typeData = [
    { value: 'internal', label: 'Internal' },
    { value: 'external', label: 'External' },
    { value: 'vendor', label: 'Vendor' },
  ];
  
  export const divisionData = [
    { value: 'filters', label: 'Filters' },
    { value: 'pumps', label: 'Pumps' },
    { value: 'compressor', label: 'Compressor' },
  ];

  export const intialProjectData = {
    projectName: 'business',
    reason: 'business',
    type: 'internal',
    division: 'filters',
    category: 'quality a',
    priority: 'high',
    department: 'stategy',
    startDate: '',
    endDate: '',
    location: 'pune',
    status: 'registered',
  }

  export const sortSelectArray = [
    { name: "Project name", value: 'projectName' },
    { name: "Reason", value: 'reason' },
    { name: "Type", value: 'type' },
    { name: "Division", value: 'division' },
    { name: "Category ", value: 'category' },
    { name: "Priority", value: 'priority' },
    { name: "Department", value: 'department' },
    { name: "Location", value: 'location' },
    { name: "Status", value: 'status' },
]
  