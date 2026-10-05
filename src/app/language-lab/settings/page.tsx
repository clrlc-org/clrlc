export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Settings</h1>
        <p className="text-slate-600">Manage your profile and preferences</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg border border-slate-200 p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Profile</h2>
          <p className="text-slate-600 mb-4">Coming soon</p>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Plan & billing</h2>
          <p className="text-slate-600 mb-4">Currently on: Free plan</p>
          <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90">
            Upgrade plan
          </button>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Preferences</h2>
          <p className="text-slate-600">Coming soon</p>
        </div>
      </div>
    </div>
  );
}
