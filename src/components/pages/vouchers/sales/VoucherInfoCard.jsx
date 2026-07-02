"use client";

import Card from "@/components/molecules/Card";
import Input from "@/components/common/Input";

import {
    warehouses,
    paymentModes,
    salesmen,
    gstTypes,
} from "@/config/SalesDummyData";

const VoucherInfoCard = () => {
    const today = new Date().toISOString().split("T")[0];

    return (
        <Card
            title="Voucher Information"
            subtitle="Manage voucher details."
            bodyClassName="space-y-4"
        >
            <div className="grid gap-4 md:grid-cols-2">

                <Input
                    label="Voucher No."
                    value="SV-00001"
                    readOnly
                />

                <Input
                    type="date"
                    label="Voucher Date"
                    defaultValue={today}
                />

            </div>

            <Input
                type="select"
                label="Warehouse"
                placeholder="Select warehouse"
                options={warehouses}
                valueKey="value"
                labelKey="label"
            />

            <Input
                type="select"
                label="Payment Mode"
                placeholder="Select payment mode"
                options={paymentModes}
                valueKey="value"
                labelKey="label"
            />

            <Input
                type="select"
                label="Salesman"
                placeholder="Select salesman"
                options={salesmen}
                valueKey="value"
                labelKey="label"
            />

            <Input
                type="select"
                label="GST Type"
                placeholder="Select GST type"
                options={gstTypes}
                valueKey="value"
                labelKey="label"
            />

            <Input
                label="Reference No."
                placeholder="Enter reference number"
            />

            <Input
                type="textarea"
                label="Remarks"
                placeholder="Enter remarks (optional)"
            />
        </Card>
    );
};

export default VoucherInfoCard;