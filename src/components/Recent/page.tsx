export default function Recent() {
    return (
        <div className="w-11/12 mx-auto bg-white rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Lastest Orders</h2>
            <div className="overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="text-left border-b">
                            <th className="py-2">#ID</th>
                            <th className="py-2">Name</th>
                            <th className="py-2">Time</th>
                            <th className="py-2">Email</th>
                            <th className="py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { id: '001', name: 'John Doe', time: '09:32 AM', email: 'Admin123@gmail.com', status: 'Login' },
                            { id: '002', name: 'Alice Smith', time: '10:10 AM', email: 'Admin123@gmail.com', status: 'Logout' },
                            { id: '003', name: 'Bob Lee', time: '11:25 AM', email: 'Duck124@gmail.com', status: 'Login' },
                            { id: '004', name: 'Bob Lee', time: '11:25 AM', email: 'Admin123@gmail.com', status: 'Logout' },
                            { id: '005', name: 'Bob Lee', time: '11:25 AM', email: 'Admin123@gmail.com', status: 'Login' },
                            { id: '006', name: 'Bob Lee', time: '11:25 AM', email: 'Duck124@gmail.com', status: 'Logout' },
                        ].map((order) => (
                            <tr key={order.id} className="border-b hover:bg-gray-50">
                                <td className="py-2">{order.id}</td>
                                <td className="py-2">{order.name}</td>
                                <td className="py-2">{order.time}</td>
                                <td className="py-2">{order.email}</td>
                                <td className="py-2">
                                    <span
                                        className={`px-3 py-1 text-sm rounded-full ${order.status === 'Login'
                                                ? 'bg-green-100 text-green-700'
                                                : order.status === 'Pending'
                                                    ? 'bg-yellow-100 text-yellow-700'
                                                    : 'bg-red-100 text-red-700'
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}