import { principalState } from '../../App';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';

import './InsurerDashboardPage.css';
import LargeLink from '../../components/ui/LargeLink';
import LargeButton from '../../components/ui/LargeButton';
import InlineModal from '../../components/InlineModal';
import FindClaim from '../../modals/insurer/FindClaim';


export default function InsurerDashboardPage() {
    const principal = useRecoilValue(principalState);
    const [showFind, setShowFind] = useState(false);

    return (
        <>
            <main className='flex flex-col gap-10 items-center'>
                <header
                    id="insurer-header"
                    className='flex flex-col items-center pt-8'
                >
                    <div
                        id="header-copy"
                        className='bg-slate-50 opacity-90 w-fit p-4 rounded-lg text-2xl gap-6 flex flex-col text-blue-800'
                    >
                        <h2 className='text-4xl'>Welcome, {principal?.username}</h2>
                    </div>
                </header>

                <section className='flex gap-4'>
                    <LargeLink to="claims">Manage claims</LargeLink>
                    <LargeButton onClick={() => setShowFind(true)}>Resolve claim</LargeButton>
                </section>
            </main>
            { showFind &&
                <InlineModal onClose={() => setShowFind(false)}>
                    <FindClaim />
                </InlineModal>
            }
        </>
    )
}
