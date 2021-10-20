import React from 'react';
import { useSelector } from 'react-redux';
import { Calendar } from './Calendar';
import { Indicator} from './indicator';
import { TagRatio } from './TagRatio';
import { TimeChart } from './TimeChart';

export function UserMetrics() {
  return (
    <div>
      <h1>Here Are Your Latest User Metrics</h1>
      <h3>Visualize Your Reading Habits</h3>
      <div>
        <div>
          <Indicator />
        </div>
        <div>
        </div>
      </div>
      <div>
        <TagRatio />
        <TimeChart />
      </div>

      <span>
        <Calendar />
      </span>
    </div>
  );
}