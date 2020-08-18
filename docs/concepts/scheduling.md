---
id: scheduling
title: Scheduling runs
sidebar_label: Scheduling runs
---

The **Schedule** tab is your main place in the Charter interface to create new runs of your project, or see how your participants can create new runs on their own.

## Runs & run groups

Every **Run** of your project is an independent playthrough by a set of participants.  Runs generally don't affect one another.

If your project involves multiple groups of participants going through it at the same time, you may want to organize your runs into **Run groups**. When you operate your project (detailed in the [Operating runs](/docs/concepts/operating) page), you'll see all the runs in a run group together. It's also easier to have actor participants shared between runs when they are grouped in this way.

## Scheduled runs

As an experience organizer, the default way to have participants go through your project is by schedulings runs. You can click the **Schedule a run group** button to create your first run group.

![Create a run group](/img/concepts/schedule/schedule-start.png)

Then you can click **Create** to create your run.

![Create a run](/img/concepts/schedule/schedule-date.png)

You can now click **Add a run** to create your first run.

![Create a run](/img/concepts/schedule/schedule-run.png)

And choose a title for your run, then click **Create**.

![Create a run](/img/concepts/schedule/schedule-run-opts.png)

You now can view your run and run group. On this page you can create new participants for each role in your project, you can add new runs to this group, and you can click the **Ops** button to start operating this run group. You can also **Archive** the run group, which marks it as completed. You'll still be able to view it after it's archived.

![Create a run](/img/concepts/schedule/schedule-group.png)

See [Operating runs](/docs/concepts/operating) for more on what to do after your run is scheduled!

## Player-started runs

You can also set things up so that players can start their own runs of your project without organizers needing to schedule each one.

### By text or call

If you want new participants to start your project by texting or calling a phone number, you first need to create a **Phone line**. The phone line should be part of the role that corresponds to your player, its **Counterpart** should be the role of whatever character role they are talking with.

Then, check the **Entryway** checkbox. This has two effects. It will assign your phone line a permanent number. And when an unrecognized number texts or calls this phone line, a new run of your project will be created, with a new participant created in the indicated role.

![Create a phone line](/img/concepts/schedule/entryway-phone.png)

Click the **Assign numbers** button to assign your number.

![Assign numbers](/img/concepts/schedule/entryway-assign.png)

You now have a unique number that's dedicated just to your project. When new participants text or call this number, a new run of your project will be created. Runs will be grouped by day.

Once a run has been started for a particular phone number, additional calls or texts from that number will flow into the active run until it is archived. Once the run is archived, if that number texts again, a new run will be created.

![Assigned numbers](/img/concepts/schedule/entryway-assigned.png)

### By web form

Players can also start new runs of your project by a web form. You'll need to create an **Interface** for your main player role, and check the **Entryway** checkbox.

![Entryway interface](/img/concepts/schedule/interface-entry.png)

Now in the **Schedule** tab, you'll see a URL just for your experience.

![Entryway URL](/img/concepts/schedule/interface-url.png)

You can share that URL with your participants. When they navigate to it, they'll see a form that they can fill out. Once completed, they will start a new run of your project in the role corresponding to the entryway interface.

![Entryway UI](/img/concepts/schedule/interface-ui.png)

You can now progress to [Operating runs](/docs/concepts/operating) to see how to monitor your runs after they are created.