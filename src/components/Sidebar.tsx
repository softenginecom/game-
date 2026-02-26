export type SidebarFilter = 'all' | 'new' | 'favorite';

const items: Array<{ id: SidebarFilter; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'new', label: 'New' },
  { id: 'favorite', label: 'Favorite' }
];

type SidebarProps = {
  active?: SidebarFilter;
  onSelect: (filter: SidebarFilter) => void;
};

export function Sidebar({ active = 'all', onSelect }: SidebarProps) {
  const renderIcon = (id: SidebarFilter) => {
    if (id === 'all') {
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }

    if (id === 'new') {
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path d="M12 3l2.2 4.5L19 9l-3.5 3.4.8 4.9L12 15l-4.3 2.3.8-4.9L5 9l4.8-1.5L12 3z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path d="M12 21l-1.3-1.2C6 15.4 3 12.7 3 9.4 3 6.8 5 5 7.6 5c1.5 0 2.9.7 3.9 1.8C12.5 5.7 13.9 5 15.4 5 18 5 20 6.8 20 9.4c0 3.3-3 6-7.7 10.4L12 21z" fill="currentColor" />
      </svg>
    );
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-rail">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-label={item.label}
            className={`sidebar-item ${active === item.id ? 'active' : ''} ${item.id === 'favorite' ? 'favorite-item' : ''}`}
            onClick={() => onSelect(item.id)}
          >
            <span className="sidebar-icon">{renderIcon(item.id)}</span>
            <span className="sidebar-label">{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
