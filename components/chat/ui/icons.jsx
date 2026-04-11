import React from 'react';
import { cn } from './cn';

const iconDefaults = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const hasAccessibleLabel = (props) => {
  for (const key in props) {
    if (key.startsWith('aria-') || key === 'role' || key === 'title') {
      return true;
    }
  }
  return false;
};

const toDisplayName = (name) => {
  const camel = name.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, first, next) =>
    next ? next.toUpperCase() : first.toLowerCase(),
  );
  return camel.charAt(0).toUpperCase() + camel.slice(1);
};

function IconBase(
  {
    color = 'currentColor',
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = '',
    children,
    iconNode,
    ...props
  },
  ref,
) {
  return React.createElement(
    'svg',
    {
      ref,
      ...iconDefaults,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? (24 * Number(strokeWidth)) / Number(size) : strokeWidth,
      className: cn('lucide', className),
      ...(!children && !hasAccessibleLabel(props) && { 'aria-hidden': 'true' }),
      ...props,
    },
    [
      ...iconNode.map(([tag, tagProps]) => React.createElement(tag, tagProps)),
      ...(Array.isArray(children) ? children : [children]),
    ],
  );
}

const ForwardedIconBase = React.forwardRef(IconBase);

function createIcon(name, iconNode) {
  const Component = React.forwardRef(({ className, ...props }, ref) =>
    React.createElement(ForwardedIconBase, {
      ref,
      iconNode,
      className: cn(
        `lucide-${toDisplayName(name).replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}`,
        `lucide-${name}`,
        className,
      ),
      ...props,
    }),
  );

  Component.displayName = toDisplayName(name);
  return Component;
}

export const ShieldCheckIcon = createIcon('shield-check', [
  ['path', { d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z', key: 'oel41y' }],
  ['path', { d: 'm9 12 2 2 4-4', key: 'dzmm74' }],
]);

export const BookOpenIcon = createIcon('book-open', [
  ['path', { d: 'M12 7v14', key: '1akyts' }],
  ['path', { d: 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z', key: 'ruj8y' }],
]);

export const TriangleAlertIcon = createIcon('triangle-alert', [
  ['path', { d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3', key: 'wmoenq' }],
  ['path', { d: 'M12 9v4', key: 'juzpu7' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
]);

export const PlayIcon = createIcon('play', [
  ['path', { d: 'M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z', key: '10ikf1' }],
]);

export const ChevronLeftIcon = createIcon('chevron-left', [
  ['path', { d: 'm15 18-6-6 6-6', key: '1wnfg3' }],
]);

export const PhoneIcon = createIcon('phone', [
  ['path', { d: 'M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384', key: '9njp5v' }],
]);

export const EllipsisIcon = createIcon('ellipsis', [
  ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
  ['circle', { cx: '19', cy: '12', r: '1', key: '1wjl8i' }],
  ['circle', { cx: '5', cy: '12', r: '1', key: '1pcz8c' }],
]);

export const SmileIcon = createIcon('smile', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M8 14s1.5 2 4 2 4-2 4-2', key: '1y1vjs' }],
  ['line', { x1: '9', x2: '9.01', y1: '9', y2: '9', key: 'yxxnd0' }],
  ['line', { x1: '15', x2: '15.01', y1: '9', y2: '9', key: '1p4y9e' }],
]);

export const PlusIcon = createIcon('plus', [
  ['path', { d: 'M5 12h14', key: '1ays0h' }],
  ['path', { d: 'M12 5v14', key: 's699le' }],
]);

export const MicIcon = createIcon('mic', [
  ['path', { d: 'M12 19v3', key: 'npa21l' }],
  ['path', { d: 'M19 10v2a7 7 0 0 1-14 0v-2', key: '1vc78b' }],
  ['rect', { x: '9', y: '2', width: '6', height: '13', rx: '3', key: 's6n7sd' }],
]);

export const ChevronDownIcon = createIcon('chevron-down', [
  ['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }],
]);

export const HeartIcon = createIcon('heart', [
  ['path', { d: 'M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5', key: 'mvr1a0' }],
]);

export const StarIcon = createIcon('star', [
  ['path', { d: 'M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z', key: 'r04s7s' }],
]);

export const HouseIcon = createIcon('house', [
  ['path', { d: 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8', key: '5wwlr5' }],
  ['path', { d: 'M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', key: 'r6nss1' }],
]);
