export function PackageActivitiesTab() {
  const activities = ['Game Drives', 'Walking Safaris', 'Hot Air Balloon Safari', 'Cultural Visits', 'Bird Watching']

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-3xl font-sans font-bold text-safari-ink mb-6">Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activities.map((activity, idx) => (
          <div key={idx} className="bg-[#f9f9f9] p-4 rounded-lg flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-safari-green/10 flex items-center justify-center text-safari-green font-bold">
              ✓
            </div>
            <span className="font-medium text-safari-ink">{activity}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
