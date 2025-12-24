import React from 'react';

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SliderItem {
  id: number;
  content: string;
  color: string;
}

export type ToggleState = 'A' | 'B';