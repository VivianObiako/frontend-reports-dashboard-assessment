type TestInfo = {
    name: string;
    type: string;
    datePublished: string;
    participants: number;
  };
  
  type Metrics = {
    totalTasks: number;
    taskCompletion: number;
    sus: number;
    nps: number;
    ces: number;
  };
  
  type DeviceBreakdown = {
    name: string;
    count: number;
  };
  
  type LocationBreakdown = {
    country: string;
    count: number;
  };
  
  type ParticipantsData = {
    testInfo: TestInfo;
    metrics: Metrics;
    deviceBreakdown: DeviceBreakdown[];
    locationBreakdown: LocationBreakdown[];
  };
  