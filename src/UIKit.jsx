import React from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';

export default function UIKit({ onBack }) {
    return (
        <div className="min-h-screen p-8 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">UI Kit</h1>
                    <Button variant="ghost" onClick={onBack}>&larr; Portföye Dön</Button>
                </div>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">Buttons</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 mb-3">Variants</h3>
                            <div className="flex flex-wrap gap-4">
                                <Button variant="primary">Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="danger">Danger</Button>
                                <Button variant="ghost">Ghost</Button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-500 mb-3">Sizes</h3>
                            <div className="flex flex-wrap items-center gap-4">
                                <Button size="sm">Small</Button>
                                <Button size="md">Medium</Button>
                                <Button size="lg">Large</Button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-500 mb-3">States</h3>
                            <div className="flex flex-wrap gap-4">
                                <Button disabled>Disabled Button</Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">Inputs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input label="Normal Input" placeholder="Type here..." />
                        <Input label="Error Input" defaultValue="Wrong value" error="Girdiğiniz değer hatalı." />
                        <Input label="Help Text Input" placeholder="Password" type="password" helpText="Şifreniz en az 8 karakter olmalıdır." />
                        <Input label="Disabled Input" defaultValue="Cannot change" disabled />
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">Cards</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card title="Elevated Card" variant="elevated">
                            <p>This is a standard elevated card with a shadow effect.</p>
                        </Card>
                        <Card title="Outlined Card" variant="outlined">
                            <p>This card has a subtle border instead of a shadow.</p>
                        </Card>
                        <Card
                            title="Filled Card"
                            variant="filled"
                            footer={<Button variant="primary" size="sm">Action</Button>}
                        >
                            <p>This card uses a filled background color and includes a footer.</p>
                        </Card>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">Alerts</h2>
                    <div className="space-y-4">
                        <Alert variant="info" title="Information">
                            This is an informational alert with a title.
                        </Alert>
                        <Alert variant="success">
                            Your action was completed successfully!
                        </Alert>
                        <Alert variant="warning">
                            Please be careful with this action.
                        </Alert>
                        <Alert
                            variant="error"
                            dismissible
                            onDismiss={() => console.log('Error alert dismissed')}
                        >
                            An error occurred. Click the X to dismiss and check the console.
                        </Alert>
                    </div>
                </section>
            </div>
        </div>
    );
}
