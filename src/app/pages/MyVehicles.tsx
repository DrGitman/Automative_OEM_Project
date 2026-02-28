import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { HiDotsVertical, HiPlus, HiSearch, HiX, HiUpload, HiTrash, HiCheckCircle, HiCalendar, HiInformationCircle } from "react-icons/hi";
import { toast } from "sonner";
// @ts-ignore
import gearhouseLogo from "../../assets/Gearhouse logo Car only.png";

// ==========================================
// MY VEHICLES PAGE
// Manages the user's fleet of cars with card-based UI.
// Supports Add, Edit, Delete, and Read operations.
// ==========================================
export default function MyVehicles() {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);

  const itemsPerPage = 6;

  const fetchVehicles = async () => {
    const userStr = localStorage.getItem("user");
    if (!userStr) return;
    const user = JSON.parse(userStr);
    const userId = user.id || user.user?.id;
    if (!userId) return;

    try {
      const response = await fetch(`http://localhost:8000/dashboard/data?user_id=${userId}`);
      if (response.ok) {
        const result = await response.json();
        setVehicles(result.vehicles || []);
      }
    } catch (error) {
      console.error("Failed to fetch vehicles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const filteredVehicles = vehicles.filter((v) =>
    `${v.make} ${v.model}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.license_plate?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage);
  const currentVehicles = filteredVehicles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleOpenEdit = (v: any) => {
    setSelectedVehicle(v);
    setShowEditModal(true);
  };

  const handleOpenView = (v: any) => {
    setSelectedVehicle(v);
    setShowViewModal(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#F8F9FB]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D72322]"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9FB] min-h-screen flex font-['Outfit',sans-serif]">
      <Sidebar />

      <div className="ml-[256px] flex-1">
        <Header title="My Vehicles" subtitle="Let's check your Garage today" />

        <div className="p-10 space-y-8 max-w-[1600px] mx-auto">
          {/* Header Actions */}
          <div className="flex justify-between items-center">
            <div className="relative w-[400px]">
              <HiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-[#A3A6B4] text-xl" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-14 pr-6 bg-white border border-[#EEEFF2] rounded-2xl outline-none focus:border-[#D72322] shadow-sm transition-all"
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[10px] font-bold text-[#A3A6B4] border border-[#EEEFF2] px-2 py-1 rounded-md">
                <span>⌘</span><span>K</span>
              </div>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-[#D72322] text-white px-8 h-14 rounded-2xl font-black text-sm flex items-center gap-2 shadow-xl shadow-red-100 hover:scale-105 transition-all"
            >
              <HiPlus /> Add Vehicle
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-8">
            {currentVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onEdit={() => handleOpenEdit(vehicle)}
                onView={() => handleOpenView(vehicle)}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between pt-10">
            <p className="text-xs font-bold text-[#A3A6B4]">
              Showing <span className="text-[#04091E]">1 to {currentVehicles.length}</span> of <span className="text-[#04091E]">{filteredVehicles.length}</span> vehicles
            </p>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center border border-[#EEEFF2] rounded-xl text-[#A3A6B4] hover:bg-white sm:text-lg">&lt;</button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl text-xs font-black transition-all ${currentPage === i + 1 ? 'bg-[#D72322] text-white shadow-lg' : 'bg-white text-[#747681] border border-[#EEEFF2]'}`}
                >
                  {i + 1}
                </button>
              ))}
              <button className="w-10 h-10 flex items-center justify-center border border-[#EEEFF2] rounded-xl text-[#A3A6B4] hover:bg-white sm:text-lg">&gt;</button>
            </div>
          </div>
        </div>
      </div>

      {showAddModal && <AddVehicleModal onClose={() => setShowAddModal(false)} onRefresh={fetchVehicles} />}
      {showEditModal && <EditVehicleModal vehicle={selectedVehicle} onClose={() => setShowEditModal(false)} onRefresh={fetchVehicles} />}
      {showViewModal && <ViewVehicleModal vehicle={selectedVehicle} onEdit={() => { setShowViewModal(false); setShowEditModal(true); }} onClose={() => setShowViewModal(false)} />}
    </div>
  );
}

function VehicleCard({ vehicle, onEdit, onView }: { vehicle: any, onEdit: () => void, onView: () => void }) {
  return (
    <div className="bg-white rounded-[32px] p-8 border border-[#EEEFF2] shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 bg-[#F8F9FB] rounded-2xl flex items-center justify-center p-3 border border-[#EEEFF2]">
          {vehicle.image_url ? (
            <img src={vehicle.image_url} alt="" className="w-full h-full object-cover rounded-lg" />
          ) : (
            <img src={gearhouseLogo} alt="" className="w-full h-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
          )}
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className={`px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest ${vehicle.risk_level === 'High' ? 'bg-red-50 text-[#D72322]' :
            vehicle.risk_level === 'Medium' ? 'bg-orange-50 text-[#F97316]' : 'bg-gray-100 text-[#747681]'
            }`}>
            {vehicle.risk_level || 'LOW'} RISK
          </span>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-black text-[#04091E] leading-tight mb-1">{vehicle.make} {vehicle.model}</h3>
        <p className="text-[10px] font-bold text-[#A3A6B4] uppercase tracking-widest">{vehicle.year} • {vehicle.fuel_type || 'Pickup Truck'}</p>
      </div>

      <div className="space-y-4 mb-10">
        <div className="flex justify-between items-center">
          <span className="text-[9px] font-black text-[#A3A6B4] uppercase tracking-widest">VIN</span>
          <span className="text-sm font-bold text-[#04091E]">{vehicle.vin || 'GH-02938472'}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[9px] font-black text-[#A3A6B4] uppercase tracking-widest">Odometer</span>
          <span className="text-sm font-bold text-[#04091E]">{(vehicle.mileage || 0).toLocaleString()} km</span>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onView}
          className="flex-1 h-12 bg-[#D72322] text-white rounded-xl text-xs font-black shadow-lg shadow-red-50 hover:bg-[#B91C1C] transition-all"
        >
          View Details
        </button>
        <button
          onClick={onEdit}
          className="px-6 h-12 border border-[#EEEFF2] rounded-xl text-xs font-black text-[#747681] hover:bg-gray-50 transition-all"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

function ModalLayout({ title, children, onClose }: { title: string, children: React.ReactNode, onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#04091E]/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-[40px] w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-8 flex justify-between items-center bg-white border-b border-[#EEEFF2]">
          <h2 className="text-2xl font-black text-[#04091E]">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-[#F8F9FB] rounded-xl transition-all"><HiX className="text-2xl text-[#747681]" /></button>
        </div>
        <div className="p-8 max-h-[85vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

function AddVehicleModal({ onClose, onRefresh }: { onClose: () => void, onRefresh: () => void }) {
  const [formData, setFormData] = useState({
    make: "", model: "", year: 2024, license_plate: "", fuel_type: "", vehicle_type: "", mileage: 0, service_interval: 10000, vin: "", notes: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userStr = localStorage.getItem("user");
    if (!userStr) return;
    const userId = JSON.parse(userStr).id;

    try {
      const resp = await fetch(`http://localhost:8000/vehicles/add?user_id=${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (resp.ok) {
        toast.success("Vehicle added successfully!");
        onRefresh();
        onClose();
      }
    } catch (err) {
      toast.error("Failed to add vehicle");
    }
  };

  return (
    <ModalLayout title="Add Vehicle" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <Input label="VEHICLE NAME" placeholder="e.g. Delivery Van 01" value={formData.make} onChange={(v: string) => setFormData({ ...formData, make: v })} />
          <Input label="CURRENT MILEAGE" placeholder="0" type="number" value={formData.mileage} onChange={(v: string) => setFormData({ ...formData, mileage: parseInt(v) })} suffix="km" />
          <Input label="LICENSE PLATE" placeholder="ABC-1234" value={formData.license_plate} onChange={(v: string) => setFormData({ ...formData, license_plate: v })} required />
          <Select label="FUEL TYPE" options={["Diesel", "Gasoline", "Electric", "Hybrid"]} value={formData.fuel_type} onChange={(v: string) => setFormData({ ...formData, fuel_type: v })} />
          <Select label="VEHICLE TYPE" options={["Pickup", "SUV", "Sedan", "Van", "Truck"]} value={formData.vehicle_type} onChange={(v: string) => setFormData({ ...formData, vehicle_type: v })} />
          <Input label="SERVICE INTERVAL" value={formData.service_interval} onChange={(v: string) => setFormData({ ...formData, service_interval: parseInt(v) })} suffix="km" />
          <Input label="YEAR" value={formData.year} onChange={(v: string) => setFormData({ ...formData, year: parseInt(v) })} />
          <div className="space-y-2">
            <span className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">VEHICLE IMAGE</span>
            <div className="h-24 border-2 border-dashed border-[#EEEFF2] rounded-2xl flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-[#D72322] transition-all">
              <HiUpload className="text-[#D72322] text-xl" />
              <span className="text-[10px] font-bold text-[#747681]">Upload Vehicle Image</span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">NOTES</span>
          <textarea
            value={formData.notes}
            onChange={e => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Add any additional details..."
            className="w-full p-4 bg-[#F8F9FB] border border-[#EEEFF2] rounded-2xl h-32 outline-none focus:border-[#D72322] transition-all text-sm font-medium"
          />
        </div>
        <div className="flex gap-4 pt-4">
          <button type="button" onClick={onClose} className="flex-1 h-14 border border-[#EEEFF2] text-[#747681] rounded-2xl font-black text-sm">Cancel</button>
          <button type="submit" className="flex-1 h-14 bg-[#D72322] text-white rounded-2xl font-black text-sm shadow-xl shadow-red-100">Add Vehicle</button>
        </div>
      </form>
    </ModalLayout>
  );
}

function EditVehicleModal({ vehicle, onClose, onRefresh }: { vehicle: any, onClose: () => void, onRefresh: () => void }) {
  const [formData, setFormData] = useState({ ...vehicle });

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resp = await fetch(`http://localhost:8000/vehicles/update/${vehicle.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (resp.ok) {
        toast.success("Changes saved!");
        onRefresh();
        onClose();
      }
    } catch (err) {
      toast.error("Failed to update");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete this vehicle? This action cannot be undone.")) return;
    try {
      const resp = await fetch(`http://localhost:8000/vehicles/delete/${vehicle.id}`, { method: "DELETE" });
      if (resp.ok) {
        toast.success("Vehicle removed");
        onRefresh();
        onClose();
      }
    } catch (err) {
      toast.error("Failed to delete");
    }
  };

  return (
    <ModalLayout title="Edit Vehicle" onClose={onClose}>
      <form onSubmit={handleUpdate} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <Input label="VEHICLE NAME" value={formData.make} onChange={(v: string) => setFormData({ ...formData, make: v })} />
          <Input label="CURRENT MILEAGE" value={formData.mileage} onChange={(v: string) => setFormData({ ...formData, mileage: parseFloat(v) })} suffix="km" />
          <Select label="VEHICLE TYPE" options={["Pickup", "SUV", "Sedan", "Van", "Truck"]} value={formData.vehicle_type} onChange={(v: string) => setFormData({ ...formData, vehicle_type: v })} />
          <Input label="SERVICE INTERVAL" value={formData.service_interval} onChange={(v: string) => setFormData({ ...formData, service_interval: parseInt(v) })} suffix="km" />
          <Input label="YEAR" value={formData.year} onChange={(v: string) => setFormData({ ...formData, year: v })} />
          <Input label="LICENSE PLATE" value={formData.license_plate} onChange={(v: string) => setFormData({ ...formData, license_plate: v })} />
          <Select label="FUEL TYPE" options={["Diesel", "Gasoline", "Electric", "Hybrid"]} value={formData.fuel_type} onChange={(v: string) => setFormData({ ...formData, fuel_type: v })} />
          <div className="space-y-2">
            <span className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">VEHICLE IMAGE</span>
            <div className="flex items-center gap-4 bg-[#F8F9FB] p-4 rounded-2xl border border-[#EEEFF2]">
              <div className="w-16 h-12 bg-white rounded-lg p-1 border border-[#EEEFF2]">
                <img src={vehicle.image_url || gearhouseLogo} alt="" className="w-full h-full object-contain" />
              </div>
              <button type="button" className="flex items-center gap-2 text-[10px] font-black text-[#04091E] border border-[#EEEFF2] px-4 py-2 rounded-xl bg-white hover:bg-gray-50">
                <HiUpload /> Replace Image
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#FFF8F8] border border-red-50 rounded-[24px] p-6 space-y-4">
          <h4 className="text-[10px] font-black text-[#D72322] uppercase tracking-[0.2em]">Maintenance Summary</h4>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[8px] font-black text-[#A3A6B4] uppercase tracking-widest mb-1">Next Service Due</p>
              <p className="text-xl font-black text-[#04091E]">55,200 km</p>
            </div>
            <div>
              <p className="text-[8px] font-black text-[#A3A6B4] uppercase tracking-widest mb-1">Current Mileage</p>
              <p className="text-xl font-black text-[#04091E]">{formData.mileage?.toLocaleString()} km</p>
            </div>
            <div className="text-right">
              <p className="text-[8px] font-black text-[#A3A6B4] uppercase tracking-widest mb-1">Health Score</p>
              <div className="flex items-center gap-3">
                <span className="text-xl font-black text-[#10B981]">{vehicle.health_score || 94}%</span>
                <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-[#10B981] h-full" style={{ width: `${vehicle.health_score || 94}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4">
          <button onClick={handleDelete} type="button" className="flex items-center gap-2 text-xs font-black text-[#D72322] hover:underline">
            <HiTrash /> Delete Vehicle
          </button>
          <div className="flex gap-4">
            <button type="button" onClick={onClose} className="px-8 h-14 border border-[#EEEFF2] text-[#747681] rounded-2xl font-black text-sm">Cancel</button>
            <button type="submit" className="px-8 h-14 bg-[#D72322] text-white rounded-2xl font-black text-sm shadow-xl shadow-red-100">Save Changes</button>
          </div>
        </div>
      </form>
    </ModalLayout>
  );
}

function ViewVehicleModal({ vehicle, onEdit, onClose }: { vehicle: any, onEdit: () => void, onClose: () => void }) {
  return (
    <ModalLayout title="Vehicle Information" onClose={onClose}>
      <div className="space-y-8">
        <div className="flex justify-between items-start">
          <div className="relative group">
            <img src={vehicle.image_url || gearhouseLogo} alt="" className="w-64 h-48 object-cover rounded-[32px] border border-[#EEEFF2]" />
            <div className="absolute -bottom-6 left-0 right-0 bg-white p-4 rounded-2xl border border-[#EEEFF2] shadow-sm flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#10B981]" />
              <span className="text-sm font-black text-[#04091E]">In Operation</span>
            </div>
          </div>
          <button onClick={onEdit} className="text-sm font-black text-[#D72322] hover:underline">Edit Info</button>
        </div>

        <div className="grid grid-cols-2 gap-y-8 gap-x-12 pt-8">
          <InfoItem label="VIN" value={vehicle.vin || '1HTF2394019238842'} />
          <InfoItem label="MAKE" value={vehicle.make || 'Toyota'} />
          <InfoItem label="MODEL" value={vehicle.model || 'Hilux Double Cab'} />
          <InfoItem label="YEAR" value={vehicle.year || '2022'} />
          <InfoItem label="ENGINE CC" value={vehicle.engine_cc || '2,755 cc'} />
          <InfoItem label="ENGINE TYPE" value={vehicle.engine_type || '2.8L Diesel Turbo'} />
          <InfoItem label="TRANSMISSION" value={vehicle.transmission || '6-Speed Automatic'} />
          <InfoItem label="FUEL CAPACITY" value={vehicle.fuel_capacity || '80 Liters'} />
          <InfoItem label="CURRENT ODOMETER" value={`${(vehicle.mileage || 0).toLocaleString()} km`} />
          <InfoItem label="LAST SERVICE DATE" value={vehicle.last_service_date || '12 Oct 2023'} />
        </div>
      </div>
    </ModalLayout>
  );
}

function Input({ label, ...props }: any) {
  return (
    <div className="space-y-2 relative">
      <label className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">{label}</label>
      <div className="relative">
        <input
          {...props}
          className="w-full h-14 px-6 bg-[#F8F9FB] border border-[#EEEFF2] rounded-2xl outline-none focus:border-[#D72322] transition-all text-sm font-black text-[#04091E]"
        />
        {props.suffix && (
          <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-bold text-[#A3A6B4]">{props.suffix}</span>
        )}
      </div>
    </div>
  );
}

function Select({ label, options, value, onChange }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest">{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full h-14 px-6 bg-[#F8F9FB] border border-[#EEEFF2] rounded-2xl outline-none focus:border-[#D72322] transition-all text-sm font-black text-[#04091E] appearance-none"
      >
        <option value="">Select {label}</option>
        {options.map((o: string) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function InfoItem({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <p className="text-[10px] font-black text-[#A3A6B4] uppercase tracking-widest mb-1">{label}</p>
      <p className="text-lg font-black text-[#04091E]">{value}</p>
    </div>
  );
}
