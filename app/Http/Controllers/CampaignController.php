<?php

namespace App\Http\Controllers;

use App\Http\Resources\Campaign as ResourcesCampaign;
use App\Models\Campaign;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Str;

class CampaignController extends Controller
{
    public function store(Request $request, Campaign $campaign)
    {
        // sleep(3);
        $this->validate($request, [
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'company' => 'required|max:255',
            'email' => 'required|email|max:255',
            'notes' => 'nullable|max:3000',
        ]);

        DB::beginTransaction();
        try {
            $contact = Contact::firstOrNew(['email' => $request->email]);
            $contact->uuid = Str::uuid();
            $contact->first_name = $request->first_name;
            $contact->last_name = $request->last_name;
            $contact->company = $request->company;
            $contact->company = $request->company;
            $contact->mobile = $request->mobile;
            $contact->save();

            $campaign->contacts()->syncWithoutDetaching([
                $contact->id => [
                    'notes' => $request->notes,
                    'going' => $request->going,
                    'not_going' => $request->not_going,
                    'interested' => $request->interested,
                ]
            ]);

            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with([
                // 'error'=>'Something went Wrong',
                'error'=>$th->getMessage(),
            ]);
        }

        return Redirect::route('campaigns.show', $campaign->uuid)->with('success', 'Thank you for accepting our invitation');
    }

    public function show(Campaign $campaign)
    {
        return Inertia::render('Home', [
            'title' => $campaign->title,
            'campaign' => ResourcesCampaign::make($campaign)
        ]);
    }
}
