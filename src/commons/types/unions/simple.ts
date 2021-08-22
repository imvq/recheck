const screenBreakpoints = [868, 1024, 1280, 1366, 1536, 1600, 1728] as const;

export type ScreenBreakpoint = typeof screenBreakpoints[number];
