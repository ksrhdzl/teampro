import { useState } from 'react';
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import {
  format,
  getDay,
  parse,
  startOfWeek,
  addMonths,
  subMonths,
} from 'date-fns';
import { enUS } from 'date-fns/locale';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';

import { Button } from '@/components/button';

import { EventCard } from './event-card';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './data-calendar.css';
import { MemberIssue } from '@/libraries/graphql';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface CustomToolbarProps {
  date: Date;
  onNavigate: (action: 'PREV' | 'NEXT' | 'TODAY') => void;
}

const CustomToolbar = ({ date, onNavigate }: CustomToolbarProps) => {
  return (
    <div className="mb-4 flex w-full items-center justify-center gap-x-2 lg:w-auto lg:justify-start">
      <Button
        onClick={() => onNavigate('PREV')}
        variant="secondary"
        size="icon"
      >
        <ChevronLeftIcon className="size-4" />
      </Button>
      <div className="border-input flex h-8 w-full items-center justify-center rounded-md border px-3 py-2 lg:w-auto">
        <CalendarIcon className="mr-2 size-4" />
        <p className="text-sm">{format(date, 'MMMM yyyy')}</p>
      </div>
      <Button
        onClick={() => onNavigate('NEXT')}
        variant="secondary"
        size="icon"
      >
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  );
};

export const DataCalendar = ({ data }: { data: MemberIssue[] }) => {
  const [value, setValue] = useState(
    data.length > 0 ? new Date(data[0].issue?.endAt) : new Date(),
  );

  const events = data.map((i) => ({
    start: new Date(i.issue?.startAt),
    end: new Date(i.issue?.endAt),

    title: i.issue?.name,
    project: i.issue?.project?.name,
    assignee: i.member?.user?.name,
    // status: task.status,
    id: i.id,
  }));

  const handleNavigate = (action: 'PREV' | 'NEXT' | 'TODAY') => {
    if (action === 'PREV') {
      setValue(subMonths(value, 1));
    } else if (action === 'NEXT') {
      setValue(addMonths(value, 1));
    } else if (action === 'TODAY') {
      setValue(new Date());
    }
  };

  return (
    <Calendar
      localizer={localizer}
      date={value}
      events={events}
      views={['month']}
      defaultView="month"
      toolbar
      showAllEvents
      className="h-full"
      max={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
      formats={{
        weekdayFormat: (date, culture, localizer) =>
          localizer?.format(date, 'EEE', culture) ?? '',
      }}
      components={{
        eventWrapper: ({ event }) => (
          <EventCard
            id={event.id}
            title={event.title!}
            assignee={event.assignee!}
            project={event.project!}
            // status={event.status}
          />
        ),
        toolbar: () => (
          <CustomToolbar date={value} onNavigate={handleNavigate} />
        ),
      }}
    />
  );
};
